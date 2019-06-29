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
      }
    }

    case "ADD_QUANTITY": {
      if (state.cart.hasOwnProperty(action.payload.item.id)) {
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
    }
    case "SUBSTRACT_QUANTITY": {
      if (state.cart.hasOwnProperty(action.payload.item.id)) {
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
