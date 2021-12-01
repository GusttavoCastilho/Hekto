export enum ActionTypes {
    addProductToCart = "ADD_PRODUCT_TO_CART",
    removeProductToCart = "REMOVE_PRODUCT_TO_CART",
  }

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

export interface ICartItem {
    product: IProduct
}

export interface ICartState {
    items: ICartItem[]
}