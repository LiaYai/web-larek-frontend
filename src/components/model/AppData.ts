import { ICard, IAppState, IOrder, TFormErrors, IOrderForm, TPayment } from "../../types";
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
  preview: string | null;
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
    this.emitChanges('catalog:loaded', { catalog: this.catalog });
  }

  setCardPreview(item: ICard) {
    this.preview = item.id;
    this.emitChanges('preview:changed', item);
  }

  changeBasket(id: string) {
    if (this.order.items.includes(id)) {
      this.order.items = this.order.items.filter(it => it !== id);
    } else {
      this.order.items = [...this.order.items, id];
    }
    this.emitChanges('basket:changed');
  }

  getBasket(): CardItem[] {
    return this.catalog.filter(item => this.order.items.includes(item.id));
  }

  getTotalPrice() {
    return this.order.items.reduce((a, c) => a + this.catalog.find(it => it.id === c).price, 0);
  }

  clearBasket() {
    this.order.items = [];
    this.emitChanges('basket:changed');
  }

  validateOrderInfo() {
    const errors: TFormErrors = {};
    console.log('validate');
    if (!this.order.address) {
      errors.address = 'Необходимо указать адрес';
    }
    if (!this.order.payment) {
      errors.payment = 'Необходимо указать способ оплаты';
    }
    this.formErrors = errors;
    this.events.emit('formInfoErrors:change', this.formErrors);
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
    this.events.emit('formContactsErrors:change', this.formErrors);
    return Object.keys(errors).length === 0;
  }

  setOrderInfo(field: keyof IOrderForm, value: string) {
    this.order[field] = value;
    if (this.validateOrderInfo()) {
      this.events.emit('order:changed', this.order);
  }
    //this.emitChanges('order:changed', this.order);
  }

  setOrderContacts(field: keyof IOrderForm, value: string) {
    this.order[field] = value;
    if (this.validateOrderContacts()) {
      this.events.emit('order:changed', this.order);
  }
    //this.emitChanges('order:changed', this.order);
  }

  setOrderPayment(name: TPayment) {
    this.order.payment = name;
    console.log(this.order);
  }
}