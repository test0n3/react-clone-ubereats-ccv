import {
  addMenuItem,
  deleteFromCart,
  addQuantity,
  subtractQuantity,
  reset,
  resetCart
} from "./actions";

test("action - addMenuItem", () => {
  var item = {
    description: null,
    estimated_time: null,
    id: 9,
    name: "Pizza Americana grande",
    price: 14,
    quantity: 1
  };
  const addedItem = addMenuItem(item);
  expect(addedItem).toEqual({
    type: "ADD_MENU_ITEM",
    payload: {
      item
    }
  });
});

test("action - addQuantity", () => {
  var item = {
    description: null,
    estimated_time: null,
    id: 9,
    name: "Pizza Americana grande",
    price: 14,
    quantity: 1
  };
  const addedQuantityItem = addQuantity(item);
  expect(addedQuantityItem).toEqual({
    type: "ADD_QUANTITY",
    payload: {
      item
    }
  });
});

test("action - subtractQuantity", () => {
  var item = {
    description: null,
    estimated_time: null,
    id: 9,
    name: "Pizza Americana grande",
    price: 14,
    quantity: 1
  };
  const subtractedQuantityItem = subtractQuantity(item);
  expect(subtractedQuantityItem).toEqual({
    type: "SUBTRACT_QUANTITY",
    payload: {
      item
    }
  });
});

test("action - deleteFromCart", () => {
  var item = {
    description: null,
    estimated_time: null,
    id: 9,
    name: "Pizza Americana grande",
    price: 14,
    quantity: 1
  };
  const deletedItem = deleteFromCart(item);
  expect(deletedItem).toEqual({
    type: "DELETE_FROM_CART",
    payload: {
      item
    }
  });
});

test("action - reset", () => {
  expect(reset()).toEqual({ type: "RESET" });
});

test("action - resetCart", () => {
  expect(resetCart()).toEqual({ type: "RESET_CART" });
});
