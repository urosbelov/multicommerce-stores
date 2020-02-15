import { put, takeLatest, call } from "redux-saga/effects";
import {
  GET_USER_DATA,
  RECIEVE_USER_DATA,
  GET_USER_DATA_FAILED
} from "../actions/types";
import { getUser } from "../services/API";

function* getUserData() {
  try {
    const data = yield call(getUser);
    const dataBody = data.data;

    yield put({ type: RECIEVE_USER_DATA, payload: dataBody });
  } catch (e) {
    yield put({ type: GET_USER_DATA_FAILED, payload: e });
  }
}

export default function* watchGetUser() {
  yield takeLatest(GET_USER_DATA, getUserData);
}
