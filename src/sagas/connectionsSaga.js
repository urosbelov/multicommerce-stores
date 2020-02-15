import { put, takeLatest, call } from "redux-saga/effects";
import { AUTH_SUCCESS, GET_CONNECTIONS } from "../actions/types";
import { getConnections } from "../services/API";

function* connections() {
  console.log("Get Connections Saga: ", Date.now());
  try {
    const connections = yield call(getConnections);
    yield put({ type: GET_CONNECTIONS, payload: connections.data });
  } catch (e) {
    console.log("Connections Saga Error: ", e);
  }
}

export default function* watchGetConnections() {
  yield takeLatest(AUTH_SUCCESS, connections);
}
