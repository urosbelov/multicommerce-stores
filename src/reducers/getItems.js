import { RECIEVE_ITEMS, GET_ITEMS_FAILED } from "../actions/types";

const getItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_ITEMS:
      return action.payload;

    case GET_ITEMS_FAILED:
      return action.payload;

    default:
      return state;
  }
};

export default getItemsReducer;
