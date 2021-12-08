import { combineReducers } from 'redux'

import cart from './cart/reducers'
import product from './product/reducers'

export default combineReducers({
    cart,
    product
})