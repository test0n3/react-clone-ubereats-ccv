/* eslint-disable no-fallthrough */
export const initialState = {
  user: null,
  restaurants: {
    // 1: {
    //   id: 1,
    //   name: "McDonalds",
    //   priceType: "medium",
    //   address: "Ovalo Gutierrez",
    //   latitud: 1.27,
    //   longitud: 2.54
    // }
  },
  // restaurants: [
  //   {
  //     id: 1,
  //     name: "McDonalds",
  //     priceType: "medium",
  //     address: "Ovalo Gutierrez",
  //     latitud: 1.27,
  //     longitud: 2.54
  //   },
  //   {
  //     id: 2,
  //     name: "Chilis",
  //     priceType: "high",
  //     address: "Av. Pardo 404",
  //     latitud: 0.27,
  //     longitud: 5.54
  //   },
  //   {
  //     id: 3,
  //     name: "McArthur",
  //     priceType: "low",
  //     address: "Av. Benavides 5320",
  //     latitud: 4.27,
  //     longitud: 3.54
  //   }
  // ],
  // menuItems: {
  //   1: {
  //     id: 1,
  //     name: "Big Mac",
  //     description: "Alto en grasas saturadas",
  //     estimatedTime: 30,
  //     price: 13,
  //     restaurantId: 1
  //   },
  //   2: {
  //     id: 2,
  //     name: "McPollo",
  //     description: "Alto en grasas saturadas but a lil less",
  //     estimatedTime: 30,
  //     price: 11,
  //     restaurantId: 1
  //   },
  //   3: {
  //     id: 3,
  //     name: "Tacos",
  //     description: "yummy but buy it on tuesdays",
  //     estimatedTime: 20,
  //     price: 25,
  //     restaurantId: 2
  //   },
  //   4: {
  //     id: 4,
  //     name: "Buffalo Wings",
  //     description: "Alto en spicyyy",
  //     estimatedTime: 20,
  //     price: 29,
  //     restaurantId: 2
  //   },
  //   5: {
  //     id: 5,
  //     name: "Pan con pollo",
  //     description: "Alto en pollo",
  //     estimatedTime: 10,
  //     price: 5,
  //     restaurantId: 3
  //   },
  //   6: {
  //     id: 6,
  //     name: "Cheese Burger",
  //     description: "Alto en queso",
  //     estimatedTime: 10,
  //     price: 4,
  //     restaurantId: 3
  //   }
  // },
  cart: {
    restaurant_id: 3,
    order_items_attributes: [
      {
        menu_item_id: 1,
        quantity: 3
      },
      {
        menu_item_id: 2,
        quantity: 5
      }
    ]
  }
  // restaurants: [],
  // restaurant: {}
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
        restaurants: action.payload.reduce(
          (restaurants, restaurant) =>
            Object.assign(restaurants, { [restaurant.id]: restaurant }),
          {}
        )
        // restaurants: action.payload.reduce((restaurants, restaurant) => {
        //   return {
        //     ...restaurants,
        //     [restaurant.id]: restaurant
        //   };
        // }, {})
      };
    }
    case "GET_SELECTED_RESTAURANT": {
      console.log(action.payload);
      return {
        ...state,
        restaurants: {
          ...state.restaurants,
          [action.payload.id]: action.payload
        }
      };
    }
    case "ADD_MENU_ITEM": {
      if (!state.cart.hasOwnProperty(action.payload.menuItems.id)) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.menuItems.id]: {
              ...action.payload.menuItems,
              quantity: 1
            }
          }
        };
      }
    }

    case "ADD_QUANTITY": {
      if (state.cart.hasOwnProperty(action.payload.menuItems.id)) {
        const findMenuItem = state.cart[action.payload.menuItems.id];
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.menuItems.id]: {
              ...findMenuItem,
              quantity: findMenuItem.quantity + 1
            }
          }
        };
      }
    }
    case "SUBSTRACT_QUANTITY": {
      if (state.cart.hasOwnProperty(action.payload.menuItems.id)) {
        const findMenuItem = state.cart[action.payload.menuItems.id];
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.menuItems.id]: {
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
