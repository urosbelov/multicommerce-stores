import { put, takeLatest } from "redux-saga/effects";
import {
  HANDLE_REGISTRATION,
  RECIEVE_USER_DATA,
  AUTH_SUCCESS,
  REGISTRATION_FAILED
} from "../actions/types";
import { register } from "../services/API";

function* handleRegistration(action) {
  try {
    console.log("REGISTRATION SAGA");
    console.log(action.payload);
    const response = yield register(action.payload);
    yield put({ type: RECIEVE_USER_DATA, payload: response.data });
    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    yield put({ REGISTRATION_FAILED });
    console.log("GRESKA");
  }
}

export default function* watchHandleRegistration() {
  yield takeLatest(HANDLE_REGISTRATION, handleRegistration);
}
