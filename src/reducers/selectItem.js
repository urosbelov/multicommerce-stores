import { SELECT_ITEM } from "../actions/types";

const selectItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default selectItemReducer;
