import { takeLatest, select, put } from "redux-saga/effects";
import { UPDATE_MESSENGER, SELECT_MESSAGE } from "../actions/types";
import { getConnections } from "../actions/selectors";

function* selectMessageSaga(action) {
  try {
    const { key } = action.payload;
    console.log("Select Message Saga Action: ", action);
    //GET CONNECTIONS FROM REDUX STATE (MESSAGES CONNECTION PAGE)
    const connections = yield select(getConnections);
    let selectedConnection = connections.find(x => x._id === key);

    console.log("Selected Connection: ", selectedConnection);

    yield put({ type: UPDATE_MESSENGER, payload: selectedConnection });
  } catch (e) {
    console.log("GRESKA");
  }
}

export default function* watchSelectMessage() {
  yield takeLatest(SELECT_MESSAGE, selectMessageSaga);
}
