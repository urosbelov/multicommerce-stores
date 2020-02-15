import { put, takeLatest } from "redux-saga/effects";
import {
  REMOVE_ITEM,
  RECIEVE_ITEMS,
  CLOSE_EDIT_PRODUCT_MODAL
} from "../actions/types";
import { removeItemById } from "../services/API";

function* removeItem(payload) {
  try {
    const response = yield removeItemById(payload.id);
    const responseBody = response.data;
    yield put({ type: CLOSE_EDIT_PRODUCT_MODAL });
    yield put({ type: RECIEVE_ITEMS, payload: responseBody });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchRemoveItemSaga() {
  yield takeLatest(REMOVE_ITEM, removeItem);
}
