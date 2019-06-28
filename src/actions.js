function reset() {
  return { type: "RESET" };
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

export {
  reset,
  getRestaurants,
  getSelectedRestaurant,
  addMenuItem,
  addQuantity,
  substractQuantity
};
