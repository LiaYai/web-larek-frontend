import './scss/styles.scss';

import { API_URL, CDN_URL } from './utils/constants';
import { EventEmitter } from './components/base/events';
import { AppState } from './components/model/AppData';
import { IOrderForm, ICard, TPayment } from './types';
import { ShopAPI } from './components/model/ShopAPI';
import { cloneTemplate, ensureElement } from './utils/utils';
import { Modal } from './components/common/Modal';
import { Card } from './components/view/Card';
import { Page } from './components/view/Page';
import { Basket } from './components/view/Basket';
import { OrderInfo } from './components/view/OrderInfo';
import { OrderContacts } from './components/view/OrderContacts';
import { Success } from './components/common/Success';

const events = new EventEmitter();
const api = new ShopAPI(CDN_URL, API_URL);

// Чтобы мониторить все события, для отладки
events.onAll(({ eventName, data }) => {
	console.log(eventName, data);
});

// Шаблоны
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const orderInfoTemplate = ensureElement<HTMLTemplateElement>('#order');
const orderContactsTemplate = ensureElement<HTMLTemplateElement>('#contacts');
const successTemplate = ensureElement<HTMLTemplateElement>('#success');

// Модель данных приложения
const appData = new AppState({}, events);

// Глобальные контейнеры
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);

// Переиспользуемые части интерфейса
const basket = new Basket(cloneTemplate(basketTemplate), events);
const orderInfo = new OrderInfo(cloneTemplate(orderInfoTemplate), events, {
	onClick: (name: TPayment) => {
		orderInfo.selected = name;
		appData.setOrderPayment(name);
	},
});
const orderContacts = new OrderContacts(
	cloneTemplate(orderContactsTemplate),
	events
);

// Открыть карточку товара
events.on('card:select', (item: ICard) => {
	appData.setCardPreview(item);
});

events.on('preview:changed', (item: ICard) => {
	const showItem = (item: ICard) => {
		const card = new Card(cloneTemplate(cardPreviewTemplate), {
			onClick: () => {
				events.emit('basketItems:changed', item);
				card.buttonText = appData.order.items.includes(appData.preview);
			},
		});

		card.buttonText = appData.order.items.includes(appData.preview);

		modal.render({
			content: card.render({
				title: item.title,
				image: item.image,
				description: item.description,
				category: item.category,
				price: item.price,
			}),
		});
	};

	api
		.getSelectedCard(item.id)
		.then((result) => {
			showItem(result);
		})
		.catch((err) => {
			console.error(err);
		});
});

// Блокировка экрана при открытии модального окна
events.on('modal:open', () => {
	page.locked = true;
});

// Разблокируем экран при закрытии модального окна
events.on('modal:close', () => {
	page.locked = false;
});

// Изменились элементы каталога
events.on('catalog:loaded', () => {
	page.catalog = appData.catalog.map((item) => {
		const card = new Card(cloneTemplate(cardCatalogTemplate), {
			onClick: () => events.emit('card:select', item),
		});
		return card.render({
			title: item.title,
			category: item.category,
			image: item.image,
			description: item.description,
			price: item.price,
		});
	});

	page.counter = appData.getBasket().length;
});

// Изменились элементы корзины
events.on('basketItems:changed', (item: ICard) => {
	appData.changeBasket(item.id);
});

// Изменилась корзина
events.on('basket:changed', () => {
	basket.items = appData.getBasket().map((item) => {
		const card = new Card(cloneTemplate(cardBasketTemplate), {
			onClick: () => events.emit('basketItems:changed', item),
		});
		card.index = appData.getBasket().indexOf(item);
		return card.render({
			title: item.title,
			price: item.price,
		});
	});

	basket.selected = appData.order.items;
	appData.order.total = appData.getTotalPrice();
	basket.total = appData.order.total;
	page.counter = appData.getBasket().length;
});

// Открыть корзину
events.on('basket:open', () => {
	basket.selected = appData.order.items;
	modal.render({
		content: basket.render(),
	});
});

// Открыть первое окно заказа
events.on('order:open', () => {
	orderInfo.selected = 'card';
	appData.setOrderPayment('card');
	modal.render({
		content: orderInfo.render({
			address: '',
			payment: 'card',
			valid: false,
			errors: [],
		}),
	});
});

events.on('order:submit', () => {
	modal.render({
		content: orderContacts.render({
			email: '',
			phone: '',
			valid: false,
			errors: [],
		}),
	});
});

// Отправлена форма заказа
events.on('contacts:submit', () => {
	api
		.placeOrder(appData.order)
		.then(() => {
			const success = new Success(cloneTemplate(successTemplate), {
				onClick: () => {
					modal.close();
				},
			});

			modal.render({
				content: success.render({
					total: appData.getTotalPrice(),
				}),
			});

			appData.clearBasket();
			orderInfo.selected = 'card';
			events.emit('basket:changed');
		})
		.catch((err) => {
			console.error(err);
		});
});

// Изменилось состояние валидации формы
events.on('formContactsErrors:change', (errors: Partial<IOrderForm>) => {
	const { email, phone } = errors;
	orderContacts.valid = !email && !phone;
	orderContacts.errors = Object.values({ phone, email })
		.filter((i) => !!i)
		.join('; ');
});

events.on('formInfoErrors:change', (errors: Partial<IOrderForm>) => {
	const { address } = errors;
	orderInfo.valid = !address;
	orderInfo.errors = Object.values({ address })
		.filter((i) => !!i)
		.join('; ');
});

// Изменилось одно из полей
events.on(
	/^order\..*:change/,
	(data: { field: keyof IOrderForm; value: string }) => {
		appData.setOrderInfo(data.field, data.value);
	}
);

events.on(
	/^contacts\..*:change/,
	(data: { field: keyof IOrderForm; value: string }) => {
		appData.setOrderContacts(data.field, data.value);
	}
);

api
	.getCatalog()
	.then((data) => {
		appData.setCatalog(data);
	})
	.catch((err) => {
		console.error(err);
	});
