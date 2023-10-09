import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCTS_REQUEST } from "./actionType";
import { fetchProductsFailure, fetchProductsSuccess } from "./Action";

function* fetchProducts() {
  try {
    const response = yield call(
      fetch,
      "https://dummyjson.com/products?limit=10"
    );
    const data = yield call([response, "json"]);
    console.log("Your Data");
    yield put(fetchProductsSuccess(data.products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default function* metaSaga() {
  yield all([watchFetchProducts()]);
}
// all is being used for Running Tasks In Parallel when multiple calls are being yield...
