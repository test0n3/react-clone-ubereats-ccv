function reset() {
  return { type: "RESET" };
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

export { reset, addMenuItem, addQuantity, substractQuantity };
