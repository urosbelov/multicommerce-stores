import {
  CHANNEL_ON,
  CHANNEL_OFF,
  SERVER_OFF,
  SERVER_ON
} from "../actions/types";

const initialState = {
  channelStatus: "off",
  serverStatus: "unknown"
};

const websocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_ON:
      return { ...state, channelStatus: "on" };
    case CHANNEL_OFF:
      return { ...state, channelStatus: "off", serverStatus: "unknown" };
    case SERVER_OFF:
      return { ...state, serverStatus: "off" };
    case SERVER_ON:
      return { ...state, serverStatus: "on" };

    default:
      return state;
  }
};

export default websocketReducer;
