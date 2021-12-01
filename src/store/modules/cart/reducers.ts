import { Reducer } from 'redux'
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.addProductToCart:
            const { product } = action.payload;
            return { ...state, items: [...state.items, { product }] };
        case ActionTypes.removeProductToCart:
            return {
                items: state.items.filter(({ product }) => product.id !== action.payload)
            }
        default:
            return state;
    }
}

export default cart;