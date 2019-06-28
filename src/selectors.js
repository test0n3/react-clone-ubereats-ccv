import { useSelector, shallowEqual } from "react-redux";

function useUser() {
  return useSelector(state => state.user, shallowEqual);
}

function useCartProducts() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useSelectedRestaurant(id) {
  return useSelector(state => state.restaurants[id] || null, shallowEqual);
}

function useMenutItems() {
  return useSelector(state => Object.values(state.menuItems), shallowEqual);
}

export {
  useUser,
  useCartProducts,
  useRestaurants,
  useSelectedRestaurant,
  useMenutItems
};
