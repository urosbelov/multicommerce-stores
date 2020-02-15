import {
  NEW_MESSAGE_MODAL_OPEN,
  NEW_MESSAGE_MODAL_CLOSE,
  UPDATE_MESSENGER,
  NEW_MESSAGE
} from "../actions/types";

const initialState = {
  modal: false,
  consumer: null,
  connection: null,
  messages: []
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, Object.assign({}, action.payload)]
      };
    case UPDATE_MESSENGER:
      return { ...state, ...action.payload };
    case NEW_MESSAGE_MODAL_OPEN:
      return { ...state, modal: true };
    case NEW_MESSAGE_MODAL_CLOSE:
      return { ...state, modal: false };
    default:
      return state;
  }
};

export default messagesReducer;
