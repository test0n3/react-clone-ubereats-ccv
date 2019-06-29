import reducer from "./reducer";

test("reducer initial state", () => {
  const finalState = reducer(
    {
      user: null,
      cart: {},
      restaurants: [],
      restaurant: {}
    },
    { type: "random" }
  );

  const expectedState = {
    user: null,
    cart: {},
    restaurants: [],
    restaurant: {}
  };
  expect(finalState).toEqual(expectedState);
});
