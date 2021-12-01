import { ActionTypes, IProduct } from "./types"

export const addProductToCart = (product: IProduct) => {
    return { type: ActionTypes.addProductToCart, payload: { product } }
}

export const removeProductToCart = (productId: number) => {
    return { type: ActionTypes.removeProductToCart, payload: productId }
}