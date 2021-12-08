import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { fetchProductSuccess } from './actions';
import { ProductTypes, IProduct } from './types';

const getProducts = () => api.get<IProduct[]>('/products?limit=5');


function* fetchProductsSaga() {
    try {
        const response: AxiosResponse = yield call(getProducts);
        yield put(fetchProductSuccess(
            response.data
        ));
    } catch (error) {
        console.log(error);
    }
}

function* productsSaga() {
    yield all([takeLatest(ProductTypes.fetchProductRequest, fetchProductsSaga)]);
}

export default productsSaga;