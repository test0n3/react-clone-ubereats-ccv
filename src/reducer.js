/* eslint-disable no-fallthrough */
export const initialState = {
  user: null,
  cart: {},
  restaurants: [],
  restaurant: {}
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.payload
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null
      };
    }

    case "GET_RESTAURANTS": {
      return {
        ...state,
        restaurants: action.payload.reduce((restaurants, restaurant) => {
          return {
            ...restaurants,
            [restaurant.id]: restaurant
          };
        }, {})
      };
    }
    case "GET_SELECTED_RESTAURANT": {
      return {
        ...state,
        restaurant: action.payload
      };
    }
    case "ADD_MENU_ITEM": {
      if (!state.cart.hasOwnProperty(action.payload.item.id)) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.item.id]: {
              ...action.payload.item,
              quantity: 1
            }
          }
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart
          }
        };
      }
    }
    case "ADD_QUANTITY": {
      const findMenuItem = state.cart[action.payload.item.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.item.id]: {
            ...findMenuItem,
            quantity: findMenuItem.quantity + 1
          }
        }
      };
    }
    case "SUBSTRACT_QUANTITY": {
      const findMenuItem = state.cart[action.payload.item.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.item.id]: {
            ...findMenuItem,
            quantity: findMenuItem.quantity - 1
          }
        }
      };
    }
    case "DELETE_FROM_CART": {
      const cartUpdated = Object.values(state.cart)
        .filter(item => item.id !== action.payload.item.id)
        .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
      return {
        ...state,
        cart: cartUpdated
      };
    }
    case "RESET_CART": {
      state.cart = {};
      return {
        ...state,
        cart: {}
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
