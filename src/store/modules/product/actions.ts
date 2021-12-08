import { IProduct } from "../cart/types"
import { ProductTypes } from "./types"

export const fetchProductRequest = () => {
    return { type: ProductTypes.fetchProductRequest }
}

export const fetchProductSuccess = (product: IProduct) => {
    return { type: ProductTypes.fetchProductSuccess, payload: { product } }
}

export const fetchProductFailure = (product: IProduct) => {
    return { type: ProductTypes.fetchProductFailure, payload: { product } }
}