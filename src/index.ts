import './scss/styles.scss';

import { API_URL, CDN_URL } from './utils/constants';
import { EventEmitter } from "./components/base/events";
import { AppState } from './components/model/AppData';
import {IOrderInfo, IOrderContacts, ICard} from "./types";
import { ShopAPI } from './components/model/ShopAPI';
import { cloneTemplate, ensureElement } from './utils/utils';
import { Modal } from './components/common/Modal';
import { Card } from './components/view/Card';
import { Page } from './components/view/Page';
import { Basket } from './components/view/Basket';

const events = new EventEmitter();
const api = new ShopAPI(CDN_URL, API_URL);

// Чтобы мониторить все события, для отладки


// мониторинг всех событий, для отладки
// при любом событии будет выводиться информация о нем в консоль
// eventName - имя события
// data - данные, которые были переданы при вызове события
events.onAll(({ eventName, data }) => {
  console.log(`${eventName}:`, data);
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

// Открыть карточку товара
events.on('card:select', (item: ICard) => {
  appData.setCardPreview(item);
});

events.on('preview:changed', (item: ICard) => {
  const showItem = (item: ICard) => {
    const card = new Card(cloneTemplate(cardPreviewTemplate), {
      onClick: () => {
        events.emit('basketItems:changed', item);
        card.buttonText = appData.basket.includes(item.id) ? 'Удалить из корзины' : 'В корзину';
      }
  });
  card.buttonText = appData.basket.includes(item.id) ? 'Удалить из корзины' : 'В корзину';
    modal.render({
      content: card.render({
        title: item.title,
        image: item.image,
        description: item.description,
        price: item.price
      })
    });
  };

  api.getSelectedCard(item.id)
    .then((result) => {
        showItem(result);
    })
    .catch((err) => {
        console.error(err);
    })
});

// Блокировка экрана при открытии модального окна
events.on('modal:open', () => {
  page.locked = true;
});

// Разблокируем экран при закрытии модального окна
events.on('modal:close', () => {
  page.locked = false;
});


// events.on('order:submit', () => {
// api.placeOrder(appData.order)
// });

// Изменились элементы каталога
events.on('catalog:loaded', () => {
  page.catalog = appData.catalog.map(item => {
      const card = new Card(cloneTemplate(cardCatalogTemplate), {
          onClick: () => events.emit('card:select', item)
      });
      return card.render({
          title: item.title,
          category: item.category,
          image: item.image,
          description: item.description,
          price: item.price
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
  basket.items = appData.getBasket().map(item => {
    const card = new Card(cloneTemplate(cardBasketTemplate), {
      onClick: () => events.emit('basketItems:changed', item)
    });
    card.index = appData.getBasket().indexOf(item);
    return card.render({
      title: item.title,
      price: item.price
    });
  });

  basket.total = appData.getTotalPrice();
  page.counter = appData.getBasket().length;
})

// Открыть корзину
events.on('basket:open', () => {
  modal.render({
    content: basket.render()
  });  
});

api.getCatalog()
  .then((data) => {
    appData.setCatalog(data);
  })
  .catch(err => {
    console.error(err);
  });
