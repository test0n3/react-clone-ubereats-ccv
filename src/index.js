import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";
import { Router } from "@reach/router";
// import { UserProvider } from "./contexts/user";

import Login from "./views/login";
import Home from "./views/home";

function App() {
  return (
    <UserProvider>
      <Global
        styles={{
          body: {
            background: "#fafafa",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            margin: 0
          }
        }}
      />
      <Router>
        <Login path="/login" />
        <Home path="/" />
      </Router>
    </UserProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
