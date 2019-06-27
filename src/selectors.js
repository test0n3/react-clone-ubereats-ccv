import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useCartProducts() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useSelectedRestaurant(id) {
  return useSelector(state => state.restaurants[id], shallowEqual);
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
