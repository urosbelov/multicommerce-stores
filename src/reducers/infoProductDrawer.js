import {
  OPEN_PRODUCT_INFO_DRAWER,
  CLOSE_PRODUCT_INFO_DRAWER
} from "../actions/types";

const initialState = {
  isOpened: false,
  productId: null
};

const infoProductDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PRODUCT_INFO_DRAWER:
      return { ...state, isOpened: true };
    case CLOSE_PRODUCT_INFO_DRAWER:
      return { ...state, isOpened: false };
    default:
      return state;
  }
};

export default infoProductDrawerReducer;
