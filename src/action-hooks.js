import React from "react";
import { useDispatch } from "react-redux";

import {
  reset,
  getRestaurants,
  addMenuItem,
  addQuantity,
  substractQuantity
} from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useGetRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(getRestaurants()), [dispatch]);
}

export function useMenuItem() {
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
