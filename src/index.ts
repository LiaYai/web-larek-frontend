import './scss/styles.scss';

import { ShopAPI } from "./components/ShopAPI";
import { API_URL, CDN_URL } from './utils/constants';
import { EventEmitter } from "./components/base/events";
import { AppState, Card, TCatalogChangeEvent } from "./components/AppData";
import {IOrderInfo, IOrderContacts} from "./types";

const events = new EventEmitter();
const api = new ShopAPI(CDN_URL, API_URL);

events.onAll(({ eventName, data }) => {
  console.log(eventName, data);
})

// Модель данных приложения
const appData = new AppState({}, events);



api.getSelectedCard('854cef69-976d-4c2a-a18c-2aa45046c390')
  .then((data) => {
    appData.setCardPreview(data);
  });

api.placeOrder({
  address: 'test',
  payment: 'card',
  email: 'test',
  phone: 'test',
  items: ['412bcf81-7e75-4e70-bdb9-d3c73c9803b7'],
  total: 2500})
  .then((data) => {
    console.log(data);
  })

appData.basket = ['412bcf81-7e75-4e70-bdb9-d3c73c9803b7', '1c521d84-c48d-48fa-8cfb-9d911fa515fd'];

api.getCatalog()
  .then((data) => {
    appData.setCatalog(data);
    console.log(appData.catalog.filter(it => it.price > 1000));
    console.log(appData.getTotalPrice());
  })
  .catch(err => {
    console.error(err);
  });
  
  appData.addCardToBasket('90973ae5-285c-4b6f-a6d0-65d1d760b102');

  console.log(appData.basket);

  appData.clearBasket();

  console.log(appData.validateOrderContacts);