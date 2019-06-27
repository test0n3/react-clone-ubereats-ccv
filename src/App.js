import React from "react";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";
import Login from "./views/Login";
import RestaurantsList from "./views/RestaurantsList";
import Restaurant from "./views/Restaurants";
import Cart from "./views/Cart";

function App() {
  return (
    <>
      <Global
        styles={{ body: { margin: 0, padding: 0, fontFamily: "sans-serif" } }}
      />
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
