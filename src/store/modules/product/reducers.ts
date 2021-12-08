import { Reducer } from 'redux'
import { IProductState, ProductTypes } from './types';

const INITIAL_STATE: IProductState = {
    products: [],
    pending: false,
    error: '',
}

const product: Reducer<IProductState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductTypes.fetchProductRequest:
            return {
                ...state, pending: true
            }
        case ProductTypes.fetchProductSuccess:
            return { ...state, pending: false, products: action.payload.product, error: '' }
        case ProductTypes.fetchProductFailure:
            return { ...state, pending: false, products: [], error: action.payload.error}
        default:
            return state;
    }
}

export default product;