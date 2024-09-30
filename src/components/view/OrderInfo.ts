import { IOrder, TPayment } from '../../types';
import { ensureAllElements } from '../../utils/utils';
import { IEvents } from '../base/events';
import { Form } from '../common/Form';

export type TabActions = {
	onClick: (tab: string) => void;
};

export class OrderInfo extends Form<Partial<IOrder>> {
	protected _buttons: HTMLButtonElement[];
	constructor(
		container: HTMLFormElement,
		events: IEvents,
		actions?: TabActions
	) {
		super(container, events);

		this._buttons = ensureAllElements<HTMLButtonElement>(
			'.button_alt',
			container
		);

		this._buttons.forEach((button) => {
			button.addEventListener('click', () => {
				actions?.onClick?.(button.name);
			});
		});
	}

	set address(value: string) {
		(this.container.elements.namedItem('address') as HTMLInputElement).value =
			value;
	}

	set selected(name: TPayment) {
		this._buttons.forEach((button) => {
			this.toggleClass(button, 'button_alt-active', button.name === name);
		});
	}
}
