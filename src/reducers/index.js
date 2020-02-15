import { combineReducers } from "redux";
import { responsiveStateReducer } from "redux-responsive";

///REDUCERS
import loadingReducer from "./loadingReducer";
import loginReducer from "./loginReducer";
import getItemsReducer from "./getItems";
import removeItemReducer from "./removeItem";
import editProductModalReducer from "./editProductModal";
import addProductModalReducer from "./addProductModal";
import infoProductDrawerReducer from "./infoProductDrawer";
import selectItemReducer from "./selectItem";
import siderReducer from "./sider";
import registrationReducer from "./registrationReducer";
import messagesReducer from "./messagesReducer";
import connectionsReducer from "./connectionsReducer";
import websocketReducer from "./websocketReducer";
import ordersReducer from "./ordersReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  websocket: websocketReducer,
  items: getItemsReducer,
  messages: messagesReducer,
  connections: connectionsReducer,
  orders: ordersReducer,
  sider: siderReducer,
  selectedItem: selectItemReducer,
  removeItem: removeItemReducer,
  editProductModal: editProductModalReducer,
  addProductModal: addProductModalReducer,
  infoProductDrawer: infoProductDrawerReducer,
  registration: registrationReducer,
  isLoading: loadingReducer,
  isMobile: responsiveStateReducer
});

export default allReducers;
