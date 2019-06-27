/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Header({ fullHeader }) {
  return (
    <>
      <header>
        {fullHeader === true ? (
          <>
            <button>☰</button>
            <h1>Uber Eats Clone</h1>
          </>
        ) : (
          <button onClick="">&gt; Back</button>
        )}
      </header>
      <ul>
        <li>
          <a href="#">User</a>
        </li>
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
