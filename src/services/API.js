import axios from "axios";

///GET USER PROFILE
function getUser() {
  return axios.get("http://localhost:4000/auth/v1/stores/logged", {
    withCredentials: true
  });
}

///GET ITEMS
function getItems() {
  return axios.get("http://localhost:4000/api/v1/items", {
    withCredentials: true
  });
}

///GET CONNECTIONS
function getConnections() {
  return axios.get("http://localhost:4000/api/v1/connections", {
    withCredentials: true
  });
}

//GET ORDERS
function getOrders() {
  return axios.get("http://localhost:4000/api/v1/orders", {
    withCredentials: true
  });
}

///CREATE ITEM
function createNewItem(itemData) {
  return axios.post("http://localhost:4000/api/v1/items", itemData, {
    withCredentials: true
  });
}

///REMOVE ITEM
function removeItemById(id) {
  return axios.delete(`http://localhost:4000/api/v1/items/${id}`, {
    withCredentials: true
  });
}

//SEND MESSAGE
function sendMessage(message) {
  return axios.post("http://localhost:4000/api/v1/messages", message, {
    withCredentials: true
  });
}

///LOGIN
function login(loginData) {
  return axios.post("http://localhost:4000/auth/v1/stores/login", loginData, {
    withCredentials: true,
    validateStatus: status => {
      return status === 200 || status === 400;
    }
  });
}

function register(registerData) {
  return axios.post("http://localhost:4000/api/v1/stores", registerData, {
    withCredentials: true
  });
}

//LOGOUT
function logout() {
  return axios.get("http://localhost:4000/auth/v1/stores/logout", {
    withCredentials: true
  });
}

export {
  getUser,
  login,
  register,
  logout,
  getItems,
  createNewItem,
  removeItemById,
  sendMessage,
  getConnections,
  getOrders
};
