/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Header from "./Header";

function Login() {
  const loginInput = {
    border: "1px solid #CCCCCC",
    borderRadius: 8,
    fontSize: 28,
    padding: "5px 10px",
    width: "93%",
    margin: "10px auto"
  };
  const labelText = {
    color: "#333333",
    fontSize: 12
  };
  return (
    <article
      css={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#FFFFFF"
      }}
    >
      <Header />
      <section
        css={{
          backgrounColor: "blue",
          padding: 20,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: 300,
            height: 300,
            border: "1px solid #999999",
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#EEEEEE",
            alignSelf: "center",
            "@media (min-width: 340px)": {
              position: "relative"
            }
          }}
        >
          <section>
            <label for="loginEmail">
              <span css={labelText}>email</span>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="email"
                autocomplete="off"
                css={loginInput}
              />
            </label>
            <label for="loginPassword">
              <span css={labelText}>password</span>
              <input
                type="password"
                id="passwordEmail"
                name="passwordEmail"
                placeholder="password"
                autocomplete="off"
                css={loginInput}
              />
            </label>
          </section>
          <button
            type="submit"
            css={{
              width: "100%",
              border: "none",
              borderRadius: 8,
              backgroundColor: "#00e676",
              color: "#FFFFFF",
              fontSize: 28,
              padding: "10px 20px",
              "&:hover": { backgroundColor: "#00b248" }
              // position: "fixed",
              // bottom: 0
            }}
          >
            Login
          </button>
        </form>
      </section>
    </article>
  );
}

export default Login;
