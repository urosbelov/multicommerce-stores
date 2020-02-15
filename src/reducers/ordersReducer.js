import { RECIEVE_ORDERS } from "../actions/types";

const initialState = [];
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_ORDERS: {
      return [...action.orders];
    }
    default:
      return state;
  }
};

export default ordersReducer;
