import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  CHECK_SESSION,
  AUTH_SUCCESS,
  AUTH_FAILED,
  RECIEVE_USER_DATA,
  GET_ORDERS,
  START_CHANNEL
} from "../actions/types";
import { getUser } from "../services/API";

/// CHECK IF THERE IS A SESSION
function* checkSession() {
  console.log("Check Session Saga: ", new Date());
  try {
    //DESIGN
    yield delay(200);
    //CALL SERVER
    const response = yield call(getUser);
    //PUT USER TO STATE
    yield put({ type: RECIEVE_USER_DATA, payload: response.data });

    //SUCCESS
    yield put({ type: START_CHANNEL });
    yield put({ type: AUTH_SUCCESS });
    yield put({ type: GET_ORDERS });
  } catch (e) {
    yield put({ type: AUTH_FAILED });
  }
}

export default function* watchCheckSession() {
  yield takeLatest(CHECK_SESSION, checkSession);
}
