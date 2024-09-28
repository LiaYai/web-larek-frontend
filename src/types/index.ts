export interface ICard {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number | null;
}

export interface IBasket { 
  items: ICard[];
}
export interface IOrderInfo {
  address: string;
  payment: TPayment;
}

export interface IOrderContacts {
  email: string;
  phone: string;
}

export interface IOrder extends IOrderInfo, IOrderContacts {
  items: string[];
  total: number;
}

export interface IOrderResult {
  id: string;
}

export type TCardCompact = Pick<ICard, 'category' | 'title' | 'image' | 'price'>

export type TBasketItem = Pick<ICard, 'id' | 'title' | 'price'>

export type TCardFull = Pick<ICard, 'id' | 'category' | 'title' | 'description' | 'image' | 'price'>

export type TPayment = 'card' | 'cash' | '';

export type TFormErrors = Partial<Record<keyof IOrder, string>>;

export interface IAppState {
  catalog: ICard[];
  basket: string[];
  order: IOrder;
  formErrors: TFormErrors;
  setCatalog: () => ICard[];
  setCardPreview: (card: ICard) => void;
  addCardToBasket: (id: string) => void;
  removeCardFromBasket: (id: string) => void;
  getTotalPrice: () => number;
  clearBasket: () => void;
  validateOrderInfo: () => boolean;
  validateOrderContacts: () => boolean;
  setOrderInfo: (data: Record<keyof IOrderInfo, string>) => void;
  setOrderContacts: (data: Record<keyof IOrderContacts, string>) => void; 
}