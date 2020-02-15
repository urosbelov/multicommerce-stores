import {
  OPEN_EDIT_PRODUCT_MODAL,
  CLOSE_EDIT_PRODUCT_MODAL
} from "../actions/types";

const initialState = {
  isOpened: false,
  productId: null
};

const editProductModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EDIT_PRODUCT_MODAL:
      return {
        isOpened: true,
        productId: action.productId
      };
    case CLOSE_EDIT_PRODUCT_MODAL:
      return { ...state, isOpened: false };
    default:
      return state;
  }
};

export default editProductModalReducer;
