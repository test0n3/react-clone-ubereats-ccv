/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Login() {
  return (
    <form>
      <label for="loginEmail">
        <input
          type="text"
          id="loginEmail"
          name="loginEmail"
          placeholder="email"
        />
      </label>
      <label for="loginPassword">
        <input
          type="password"
          id="passwordEmail"
          name="passwordEmail"
          placeholder="password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
