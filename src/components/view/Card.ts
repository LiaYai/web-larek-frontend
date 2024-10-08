import { categories, ICard, TCategory } from '../../types';
import { Component } from '../base/Component';
import { formatNumber } from '../../utils/utils';

interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export class Card extends Component<ICard> {
	protected _title: HTMLElement;
	protected _category?: HTMLElement;
	protected _image?: HTMLImageElement;
	protected _description?: HTMLElement;
	protected _price: HTMLElement;
	protected _button?: HTMLButtonElement;
	protected _index?: HTMLElement;

	constructor(container: HTMLElement, actions?: ICardActions) {
		super(container);

		this._title = container.querySelector(`.card__title`);
		this._category = container.querySelector(`.card__category`);
		this._image = container.querySelector(`.card__image`);
		this._price = container.querySelector(`.card__price`);
		this._button = container.querySelector(`.card__button`);
		this._description = container.querySelector(`.card__text`);
		this._index = container.querySelector('.basket__item-index');

		if (actions?.onClick) {
			if (this._button) {
				this._button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}

	set index(value: number) {
		this.setText(this._index, String(value + 1));
	}

	get id(): string {
		return this.container.dataset.id || '';
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	set category(value: TCategory) {
		this.setText(this._category, value);
		this._category.classList.add(`card__category_${categories[value]}`);
	}
	set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	set price(value: number) {
		if (value) {
			this.setText(this._price, `${formatNumber(value)} синапсов`);
		} else {
			this.setText(this._price, 'Бесценно');
			this.setDisabled(this._button, true);
		}
	}

	set description(value: string) {
		this.setText(this._description, value);
	}

	set buttonText(inBasket: boolean) {
		this.setText(
			this._button,
			inBasket ? 'Удалить из корзины' : 'Добавить в корзину'
		);
	}
}
