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

function useSelectedRestaurant() {
  return useSelector(state => state.restaurant, shallowEqual);
}

function useMenutItems() {
  return useSelector(state => Object.values(state.menuItems), shallowEqual);
}

function useGetTotal() {
  return useSelector(state =>
    Object.values(state.cart).reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
  );
}

export {
  useUser,
  useCartProducts,
  useRestaurants,
  useSelectedRestaurant,
  useMenutItems,
  useGetTotal
};
