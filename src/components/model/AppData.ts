import { ICard, IAppState, IOrder, TFormErrors, IOrderInfo, IOrderContacts } from "../../types";
import { Model } from "../base/Model";


// export type TCatalogChangeEvent = {
//   catalog: CardItem[]
// }

export class CardItem extends Model<ICard> {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number | null;
}

export class AppState extends Model<IAppState> {
  catalog: CardItem[];
  preview: string;
  basket: string[];
  order: IOrder = {
    payment: '',
    address: '',
    email: '',
    phone: '',
    items: [],
    total: 0
  };
  formErrors: TFormErrors = {};

  setCatalog(items: ICard[]) {
    this.catalog = items.map(item => new CardItem(item, this.events));
    this.emitChanges('catalog:changed', { catalog: this.catalog });
  }

  setCardPreview(item: ICard) {
    this.preview = item.id;
    this.emitChanges('preview:changed', item);
  }

  addCardToBasket(id: string) {
    if (this.basket.includes(id)) {
      return;
    }
    this.basket = [...this.basket, id];
    this.emitChanges('basket:changed', this.basket);
  }

  removeCardFromBasket(id: string) {
    this.basket = this.basket.filter(it => it !== id);
    this.emitChanges('basket:changed', this.basket);
  }

  getBasket() {
    return this.basket;
  }

  getTotalPrice() {
    return this.basket.reduce((a, c) => a + this.catalog.find(it => it.id === c).price, 0);
  }

  clearBasket() {
    this.basket = [];
    this.emitChanges('basket:changed', this.basket);
  }

  validateOrderInfo() {
    const errors: TFormErrors = {};
    if (!this.order.address) {
      errors.address = 'Необходимо указать адрес';
    }
    if (!this.order.payment) {
      errors.payment = 'Необходимо указать способ оплаты';
    }
    this.formErrors = errors;
    this.events.emit('formErrors:change', this.formErrors);
    return Object.keys(errors).length === 0;
  }

  validateOrderContacts() {
    const errors: TFormErrors = {};
    if (!this.order.email) {
      errors.email = 'Необходимо указать email';
    }
    if (!this.order.phone) {
        errors.phone = 'Необходимо указать телефон';
    }
    this.formErrors = errors;
    this.events.emit('formErrors:change', this.formErrors);
    return Object.keys(errors).length === 0;
  }

  setOrderInfo(data: Record<keyof IOrderInfo, string>) {
    Object.assign(this.order, data);
    this.emitChanges('order:changed', this.order);
  }

  setOrderContacts(data: Record<keyof IOrderContacts, string>) {
    Object.assign(this.order, data);
    this.emitChanges('order:changed', this.order);
  }
}