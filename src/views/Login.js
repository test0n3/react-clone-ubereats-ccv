/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useLogin } from "../action-hooks";
import { navigate } from "@reach/router";
import Header from "./Header";
import { useUser } from "../selectors";

function Login() {
  const user = useUser();
  const login = useLogin();
  const [email, setEmail] = React.useState("josh@delivery.pe");
  const [password, setPassword] = React.useState("123456");
  const [error, setError] = React.useState(false);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    login({ email, password });
  }

  React.useEffect(() => {
    if (user) navigate("/");
  }, [user]);

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
          padding: 20,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form
          onSubmit={handleSubmit}
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
            <label htmlFor="email">
              <span css={labelText}>Enter email</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                css={loginInput}
                onChange={handleEmail}
                value={email}
              />
            </label>
            <label htmlFor="password">
              <span css={labelText}>Enter password</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                autoComplete="off"
                css={loginInput}
                onChange={handlePassword}
                value={password}
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
            }}
          >
            Login
          </button>
          {error && (
            <div css={{ color: "red", marginTop: "1rem" }}>Error: {error}</div>
          )}
        </form>
      </section>
    </article>
  );
}

export default Login;
