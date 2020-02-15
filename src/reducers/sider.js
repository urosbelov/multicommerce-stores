import { SIDER_OPEN, SIDER_CLOSE } from "../actions/types";

const siderReducer = (state = true, action) => {
  switch (action.type) {
    case SIDER_OPEN:
      return !state;
    case SIDER_CLOSE:
      return !state;

    default:
      return state;
  }
};

export default siderReducer;
