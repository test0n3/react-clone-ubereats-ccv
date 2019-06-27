import React from "react";
import { Router } from "@reach/router";
import Login from "./views/Login";
import RestaurantsList from "./views/RestaurantsList";
import Restaurant from "./views/Restaurants";
import Cart from "./views/Cart";

function App() {
  return (
    <>
      <main>
        <Router>
          <Login path="login" />
          <RestaurantsList path="/" />
          <Restaurant path="/restaurants/:id" />
          <Cart path="/cart" />
        </Router>
      </main>
    </>
  );
}

export default App;
