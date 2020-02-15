import { GET_ITEMS_FAILED } from "../actions/types";

const removeItemReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS_FAILED:
      return state;

    default:
      return state;
  }
};

export default removeItemReducer;
