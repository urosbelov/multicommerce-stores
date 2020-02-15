import { put, takeLatest, call, delay } from "redux-saga/effects";
import { message } from "antd";
import {
  HANDLE_AUTHENTICATION,
  AUTH_SUCCESS,
  AUTH_FAILED,
  RECIEVE_USER_DATA,
  START_CHANNEL
} from "../actions/types";
import history from "../utils/history";
import { login } from "../services/API";

function* handleLogin(action) {
  const key = "updatable";

  //SEND REQUEST
  message.loading({ content: "Ucitavanje...", key });
  try {
    let response = yield call(login, action.payload);
    yield delay(200);

    //BAD REQUEST
    if (response.status === 400) {
      throw response.data.error;
    }

    console.log("Response: ", response);
    //SET USER STATE
    yield put({ type: RECIEVE_USER_DATA, payload: response.data.user });

    yield put({ type: START_CHANNEL });
    yield put({ type: AUTH_SUCCESS });
    message.success({
      content: `Dobrodošli ${response.data.user.name}!`,
      key
    });
    history.push("/dashboard");
  } catch (err) {
    yield put({ type: AUTH_FAILED });
    message.warning({ content: err, key });
  }
}

export default function* watchHandleLogin() {
  yield takeLatest(HANDLE_AUTHENTICATION, handleLogin);
}
