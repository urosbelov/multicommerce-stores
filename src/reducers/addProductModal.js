import {
  OPEN_ADD_PRODUCT_MODAL,
  CLOSE_ADD_PRODUCT_MODAL,
  NEXT_STEP,
  PREV_STEP,
  PUSH_CATEGORY,
  PUSH_BASIC_INFO,
  PRODUCT_ADDING_SUCESS,
  CANCEL_ADD_PRODUCT
} from "../actions/types";

const initialState = {
  isOpened: false,
  currentStep: 0,
  product: {}
};

const addProductModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADD_PRODUCT_MODAL:
      return {
        ...state,
        isOpened: true
      };
    case PUSH_CATEGORY:
      return {
        ...state,
        product: { ...state.product, category: action.category }
      };
    case PUSH_BASIC_INFO:
      return {
        ...state,
        product: {
          ...state.product,
          name: action.name,
          price: action.price,
          description: action.description
        }
      };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    case PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      };
    case CANCEL_ADD_PRODUCT:
      return {
        ...initialState
      };
    case PRODUCT_ADDING_SUCESS:
      return { ...initialState };
    case CLOSE_ADD_PRODUCT_MODAL:
      return { ...state, isOpened: false };
    default:
      return state;
  }
};

export default addProductModalReducer;
