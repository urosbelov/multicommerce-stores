import { put, takeLatest, call, delay } from "redux-saga/effects";
import { GET_ORDERS, RECIEVE_ORDERS } from "../actions/types";
import history from "../utils/history";
import { getOrders } from "../services/API";

function* handleOrders(action) {
  try {
    const response = yield call(getOrders);
    const orders = response.data;
    console.log("Orders Saga (Recieve): ", response.data);
    yield put({ type: RECIEVE_ORDERS, orders });
  } catch (e) {
    console.log("Orders Saga (Error): ", e);
  }
}

export default function* watchHandleOrders() {
  yield takeLatest(GET_ORDERS, handleOrders);
}
