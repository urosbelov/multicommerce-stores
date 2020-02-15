import { GET_CONNECTIONS } from "../actions/types";

const getConnections = (state = {}, action) => {
  switch (action.type) {
    case GET_CONNECTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default getConnections;
