import { all, fork } from 'redux-saga/effects'
import productsSaga from './product/sagas'

export function* rootSaga() {
    yield all([fork(productsSaga)]);
}