import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga'
import { IProductState } from './modules/product/types';

export interface IState {
    cart: ICartState;
    product: IProductState;
  }

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;