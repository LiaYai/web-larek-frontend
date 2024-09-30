export interface ICard {
	id: string;
	category: string;
	title: string;
	description: string;
	image: string;
	price: number | null;
}

export interface IOrderForm {
	address: string;
	email: string;
	phone: string;
}

export interface IOrder extends IOrderForm {
	payment: TPayment;
	items: string[];
	total: number;
}

export interface IOrderResult {
	id: string;
}

export type TCategory =
	| 'софт-скил'
	| 'хард-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка';

export enum categories {
	'софт-скил' = 'soft',
	'хард-скил' = 'hard',
	'другое' = 'other',
	'дополнительное' = 'additional',
	'кнопка' = 'button',
}

export type TCardCompact = Pick<
	ICard,
	'category' | 'title' | 'image' | 'price'
>;

export type TBasketItem = Pick<ICard, 'id' | 'title' | 'price'>;

export type TCardFull = Pick<
	ICard,
	'id' | 'category' | 'title' | 'description' | 'image' | 'price'
>;

export type TPayment = 'card' | 'cash';

export type TFormErrors = Partial<Record<keyof IOrder, string>>;

export interface IAppState {
	catalog: ICard[];
	preview: string | null;
	order: IOrder;
	formErrors: TFormErrors;
	setCatalog: () => ICard[];
	setCardPreview: (card: ICard) => void;
	changeBasket: (id: string) => void;
	getBasket: () => ICard[];
	getTotalPrice: () => number;
	clearBasket: () => void;
	validateOrderInfo: () => boolean;
	validateOrderContacts: () => boolean;
	setOrderInfo: (data: Record<keyof IOrderForm, string>) => void;
	setOrderContacts: (data: Record<keyof IOrderForm, string>) => void;
	setOrderPayment: (payment: TPayment) => void;
}
