import React from "react";
import { useDispatch } from "react-redux";

import { reset } from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}
