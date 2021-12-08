export enum ProductTypes {
    fetchProductRequest = "FETCH_PRODUCT_REQUEST",
    fetchProductSuccess = "FETCH_PRODUCT_SUCCESS",
    fetchProductFailure = "FETCH_PRODUCT_FAILURE"
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

export interface IProductState {
    products: IProduct[]
    pending: boolean,
    error: string
}