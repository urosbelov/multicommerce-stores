import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  RECIEVE_USER_DATA,
  CHECK_SESSION,
  LOGOUT_SUCESS
} from "../actions/types";

const initialState = {
  isLogged: false,
  user: {},
  isLoading: false,
  error: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION: {
      return { ...state, isLoading: true };
    }
    case RECIEVE_USER_DATA: {
      return { ...state, user: action.payload };
    }

    case AUTH_SUCCESS:
      return { ...state, isLogged: true, isLoading: false };
    case AUTH_FAILED:
      return { ...state, isLogged: false, isLoading: false };
    case LOGOUT_SUCESS:
      return { ...state, isLogged: false };

    default:
      return state;
  }
};

export default loginReducer;
