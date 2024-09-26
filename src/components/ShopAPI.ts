import { ICard, IOrder, IOrderResult } from "../types";
import { Api, ApiListResponse } from "./base/api";

export interface IAPI {
  getCatalog: () => Promise<ICard[]>;
  getSelectedCard: (id: string) => Promise<ICard>;
  placeOrder: (order: IOrder) => Promise<IOrderResult>;
}

export class ShopAPI extends Api implements IAPI {
  readonly cdn: string;

  constructor(cdn: string, baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
    this.cdn = cdn;
  }
  getCatalog(): Promise<ICard[]> {
    return this.get('/product').then((data: ApiListResponse<ICard>) => 
      data.items.map((item) => ({
        ...item,
        image: this.cdn + item.image
      }))
    );
  }

  getSelectedCard(id: string): Promise<ICard> {
    return this.get(`/product/${id}`).then(
      (item: ICard) => ({
        ...item,
        image: this.cdn + item.image,
      })
    );
  }

  placeOrder(order: IOrder): Promise<IOrderResult> {
    return this.post('/order/', order).then(
      (data: IOrderResult) => data);
  }
}