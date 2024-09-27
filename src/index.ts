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

events.onAll(({ eventName, data }) => {
  console.log(eventName, data);
})

// Модель данных приложения
const appData = new AppState({}, events);
const page = new Page(document.body, events);
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const basket = new Basket(cloneTemplate(basketTemplate), events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);


console.log(cardPreviewTemplate);

// api.getSelectedCard('1c521d84-c48d-48fa-8cfb-9d911fa515fd')
//   .then((data) => {
//     appData.setCardPreview(data);
//   });


events.on('preview:changed', (item: ICard) => {
  const showItem = (item: ICard) => {
    const card = new Card(cloneTemplate(cardPreviewTemplate));
    modal.render({
      content: card.render({
        title: item.title,
        image: item.image,
        description: item.description,
        price: item.price
      })
    });
  };

  if (item) {
    api.getSelectedCard(item.id)
      .then((result) => {
          item.description = result.description;
          item.price = result.price;
          showItem(item);
      })
      .catch((err) => {
          console.error(err);
      })
  } else {
      modal.close();
  }
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

appData.basket = ['412bcf81-7e75-4e70-bdb9-d3c73c9803b7', '1c521d84-c48d-48fa-8cfb-9d911fa515fd'];

// Изменились элементы каталога
events.on('catalog:changed', () => {
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

api.getCatalog()
  .then((data) => {
    appData.setCatalog(data);
    //console.log(appData.catalog.filter(it => it.price > 1000));
    //console.log(appData.getTotalPrice());
  })
  .catch(err => {
    console.error(err);
  });

// Открыть корзину
events.on('basket:open', () => {
  modal.render({
    content: basket.render()
  })
});