import {
  OPEN_REGISTRATION_MODAL,
  CLOSE_REGISTRATION_MODAL,
  REGISTRATION_SUCCESS,
  REMOVE_ITEM_FAILED
} from "../actions/types";

const initialState = {
  modal: false,
  completed: false
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REGISTRATION_MODAL:
      return { ...state, modal: true };
    case CLOSE_REGISTRATION_MODAL:
      return { ...state, modal: false };
    case REGISTRATION_SUCCESS:
      return { ...state, completed: true };
    case REMOVE_ITEM_FAILED:
      return { ...state, completed: false };

    default:
      return state;
  }
};

export default registrationReducer;
