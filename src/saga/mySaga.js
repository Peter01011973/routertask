import {put, call} from 'redux-saga';

export function* getAllProducts() {
    const products = yield call(api.getProducts)
    yield put(actions.receiveProducts(products))
}