import React from "react";
import { Router } from "@reach/router";
import Login from "./views/Login";
import RestaurantsList from "./views/RestaurantsList";
import Restaurant from "./views/Restaurants";
import Cart from "./views/Cart";
import { useUser } from "./selectors";
import { Redirect } from "@reach/router";

function App() {
  const user = useUser();
  return (
    <>
      <main>
        <Router>
          {!user && <Redirect from="*" to="/login" noThrow />}
          <Login path="/login" />
          <RestaurantsList path="/" />
          <Restaurant path="/restaurants/:id" />
          <Cart path="/cart" />
        </Router>
      </main>
    </>
  );
}

export default App;
