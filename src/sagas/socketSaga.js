import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import {
  take,
  takeEvery,
  fork,
  call,
  put,
  race,
  cancelled,
  select
} from "redux-saga/effects";
import {
  SERVER_ON,
  CHANNEL_OFF,
  CHANNEL_ON,
  START_CHANNEL,
  STOP_CHANNEL,
  GET_CONNECTIONS,
  SEND_MESSAGE,
  NEW_MESSAGE
} from "../actions/types";

const socketServerURL = "http://localhost:4001";
const opts = {
  "force new connection": true,
  reconnection: true,
  reconnectionDelay: 2000, //starts with 2 secs delay, then 4, 6, 8, until 60 where it stays forever until it reconnects
  reconnectionDelayMax: 60000, //1 minute maximum delay between connections
  reconnectionAttempts: "Infinity", //to prevent dead clients, having the user to having to manually reconnect after a server restart.
  timeout: 10000, //before connect_error and connect_timeout are emitted.
  transports: ["websocket"]
};
const getUser = state => state.auth.user._id;
let socket;

//CONNECT FUNCTION
const connect = user => {
  console.log("Websocket connecting user: ", user);
  socket = io(socketServerURL, opts);
  console.log("SocketIO: ", socket);
  return socket.emit("register", user);
};

//GET USERS CHANNEL (FOR TESTING)
const getConnectionChannel = socket => {
  return eventChannel(emit => {
    const handler = data => {
      emit(data);
    };
    socket.on("newConnection", handler);
    return () => {
      socket.off("newConnection", handler);
    };
  });
};

// SWITCH ON LISTEN
const listenServerSaga = function*() {
  try {
    //STARTING CHANNEL
    yield put({ type: CHANNEL_ON });

    //TAKE USER ID FROM STORE TO LINK IT WITH SOCKET ID
    const user = yield select(getUser);

    //CONECT TO WEBSOCKET SERVER
    const socket = yield call(connect, user);

    //FORK RECIEVE MESSAGES CHANNEL
    yield fork(messagesWatcher, socket);

    //START GET USERS CHANNEL
    const connectionChannel = yield call(getConnectionChannel, socket);

    yield put({ type: SERVER_ON });

    while (true) {
      const payload = yield take(connectionChannel);
      yield put({ type: GET_CONNECTIONS, payload });
      console.log("Connection Saga: ", payload);
    }
  } catch (error) {
    console.log("Websocket error: ", error);
  } finally {
    if (yield cancelled()) {
      socket.disconnect(true);
      yield put({ type: CHANNEL_OFF });
    }
  }
};

//RECIEVE MESSAGES CHANNEL
const messagesWatcher = function*(socket) {
  const getMessagesChannel = socket => {
    return eventChannel(emit => {
      const handler = data => {
        emit(data);
      };
      socket.on("recieve", handler);
      return () => {
        socket.off("recieve", handler);
      };
    });
  };
  const messagesChannel = yield call(getMessagesChannel, socket);

  while (true) {
    const payload = yield take(messagesChannel);
    yield put({ type: NEW_MESSAGE, payload });
    console.log("New Message Saga: ", payload);
  }
};

//SEND PRIVATE MESSAGE TO WEBSOCKET
const sendMessage = message => {
  return socket.emit("sendMessage", message.payload);
};

//SEND MESSAGE LISTEN
export const watchSendMessage = function*() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
};

// WEBSOCKET SERVER LISTEN
export const messagesChannel = function*() {
  while (true) {
    yield take(START_CHANNEL);
    yield race({
      task: call(listenServerSaga),
      cancel: take(STOP_CHANNEL)
    });
  }
};
