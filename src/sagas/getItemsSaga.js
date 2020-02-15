import { put, takeLatest, call } from "redux-saga/effects";
import { GET_ITEMS, RECIEVE_ITEMS, GET_ITEMS_FAILED } from "../actions/types";
import { getItems } from "../services/API";

function* getData() {
  try {
    const data = yield call(getItems);

    const dataBody = data.data;

    yield put({ type: RECIEVE_ITEMS, payload: dataBody });
  } catch (e) {
    yield put({ type: GET_ITEMS_FAILED, payload: e });
  }
}

export default function* watchGetItemsSaga() {
  yield takeLatest(GET_ITEMS, getData);
}
