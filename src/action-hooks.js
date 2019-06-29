import React from "react";
import { useDispatch } from "react-redux";

import {
  reset,
  getRestaurants,
  getSelectedRestaurant,
  addMenuItem,
  addQuantity,
  substractQuantity,
  login,
  logout
} from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useGetRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(getRestaurants()), [dispatch]);
}

export function useGetSelectedRestaurant() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(getSelectedRestaurant(id)), [
    dispatch
  ]);
}

export function useAddMenuItem() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(addMenuItem(item)), [dispatch]);
}

export function useAddQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(addQuantity(item)), [dispatch]);
}

export function useSubstractQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(substractQuantity(item)), [
    dispatch
  ]);
}

export function useLogin() {
  const dispatch = useDispatch();
  return React.useCallback(user => dispatch(login(user)), [dispatch]);
}

export function useLogout() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(logout()), [dispatch]);
}
