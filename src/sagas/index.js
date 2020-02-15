import { all } from "redux-saga/effects";
import "../actions/types";

//SAGAS
import watchHandleLogin from "./handleLoginSaga";
import watchGetUser from "./getUserSaga";
import watchCheckSession from "./checkSessionSaga";
import watchGetItemsSaga from "./getItemsSaga";
import watchCreateItemSaga from "./createItemSaga";
import watchRemoveItemSaga from "./removeItemSaga";
import watchHandleRegistration from "./handleRegistrationSaga";
import watchHandleLogout from "./handleLogoutSaga";
import watchGetConnections from "./connectionsSaga";
import watchSelectMessage from "./selectMessagesSaga";
import watchHandleOrders from "./ordersSaga";
//MESSAGES SOCKET
import { messagesChannel, watchSendMessage } from "./socketSaga";

export default function* rootSaga() {
  yield all([
    watchHandleLogin(),
    watchGetUser(),
    watchCheckSession(),
    watchGetItemsSaga(),
    watchCreateItemSaga(),
    watchRemoveItemSaga(),
    watchHandleRegistration(),
    watchHandleLogout(),
    messagesChannel(),
    watchSendMessage(),
    watchGetConnections(),
    watchSelectMessage(),
    watchHandleOrders()
  ]);
}
