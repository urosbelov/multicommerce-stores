import { put, takeLatest, call } from "redux-saga/effects";

import { HANDLE_LOGOUT, LOGOUT_SUCESS, LOGOUT_FAILED } from "../actions/types";
import { logout } from "../services/API";
function* handleLogout(action) {
  try {
    const response = yield call(logout);
    console.log("Logout Response: ", response);
    yield put({ type: LOGOUT_SUCESS });
  } catch (err) {
    console.log("Logout Error: ", err);
    yield put({ type: LOGOUT_FAILED });
  }
}

export default function* watchHandleLogout() {
  yield takeLatest(HANDLE_LOGOUT, handleLogout);
}
