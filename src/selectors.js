import { useSelector, shallowEqual } from "react-redux";

function useCartProducts() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useRestaurants() {
  return useSelector(state => state.restaurants, shallowEqual);
}

function useSelectedRestaurant() {
  return useSelector(state => state.restaurant, shallowEqual);
}

function useMenutItems() {
  return useSelector(state => Object.values(state.menuItems), shallowEqual);
}

export {
  useCartProducts,
  useRestaurants,
  useSelectedRestaurant,
  useMenutItems
};
