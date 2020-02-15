import { put, takeLatest } from "redux-saga/effects";
import {
  PRODUCT_ADDING,
  RECIEVE_ITEMS,
  CLOSE_ADD_PRODUCT_MODAL,
  PRODUCT_ADDING_FAILED,
  PRODUCT_ADDING_SUCESS
} from "../actions/types";
import { createNewItem } from "../services/API";

function* createItem(action) {
  try {
    const response = yield createNewItem(action.payload);

    const responseBody = response.data;

    yield put({ type: PRODUCT_ADDING_SUCESS });
    yield put({ type: CLOSE_ADD_PRODUCT_MODAL });
    yield put({ type: RECIEVE_ITEMS, payload: responseBody });
  } catch (e) {
    yield put({ type: PRODUCT_ADDING_FAILED });
    console.log("GRESKA");
  }
}

export default function* watchHandleLogin() {
  yield takeLatest(PRODUCT_ADDING, createItem);
}
