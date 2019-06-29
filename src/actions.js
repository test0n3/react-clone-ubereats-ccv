const API_LOGIN_URL = "http://localhost:4000/api/login";
const API_LOGOUT_URL = "http://localhost:4000/api/logout";

function reset() {
  return { type: "RESET" };
}

function resetCart() {
  return { type: "RESET_CART" };
}

function login(user) {
  return async dispatch => {
    const response = await fetch(API_LOGIN_URL, {
      method: "POST",
      credentials: "include",
      body: user ? JSON.stringify(user) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json(); //{ name, id, email }
    dispatch({ type: "LOGIN", payload });
  };
}

function logout() {
  return async dispatch => {
    const response = await fetch(API_LOGOUT_URL, {
      method: "DELETE",
      credentials: "include"
    });
    if (!response.ok) {
      dispatch({ type: "DEFAULT" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };
}

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

function getRestaurants() {
  return async dispatch => {
    const response = await fetch("http://localhost:4000/api/restaurants", {
      credentials: "include"
    });
    const payload = await response.json();
    return dispatch({ type: "GET_RESTAURANTS", payload });
  };
}

function getSelectedRestaurant(id) {
  return async dispatch => {
    const response = await fetch(
      `http://localhost:4000/api/restaurants/${id}`,
      {
        credentials: "include"
      }
    );
    const payload = await response.json();
    return dispatch({
      type: "GET_SELECTED_RESTAURANT",
      payload
    });
  };
}

function addMenuItem(item) {
  return {
    type: "ADD_MENU_ITEM",
    payload: {
      item
    }
  };
}

function addQuantity(item) {
  return {
    type: "ADD_QUANTITY",
    payload: {
      item
    }
  };
}

function substractQuantity(item) {
  return {
    type: "SUBSTRACT_QUANTITY",
    payload: {
      item
    }
  };
}

function deleteFromCart(item) {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      item
    }
  };
}

function change(text) {
  return {
    type: "CHANGE",
    payload: text
  };
}

export {
  reset,
  resetCart,
  addMenuItem,
  addQuantity,
  substractQuantity,
  deleteFromCart,
  change,
  login,
  logout,
  createError,
  getRestaurants,
  getSelectedRestaurant
};
