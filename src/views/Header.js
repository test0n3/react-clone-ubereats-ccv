/** @jsx jsx */
import React from "react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuLink,
  MenuItem
} from "@reach/menu-button";
import { Link } from "@reach/router";
import { jsx } from "@emotion/core";

function Header({ fullHeader = true }) {
  const buttonMenu = {
    border: "none",
    borderRadius: 8,
    backgroundColor: "#00e676",
    fontSize: 30,
    color: "#FFFFFF",
    margin: "0 10px"
  };

  const menuItems = {
    lineHeight: 2,
    color: "#000000",
    textDecoration: "none",
    fontSize: "1.2em"
  };
  return (
    <>
      <header
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "#00e676",
          height: 56,
          position: "relative"
        }}
      >
        {fullHeader === true ? (
          <>
            <Menu>
              <MenuButton css={buttonMenu}>☰</MenuButton>
              <MenuList
                css={{
                  width: 300,
                  height: "calc(100vh - 57px)",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #000000",
                  color: "#000000",
                  position: "absolute",
                  top: 57,
                  left: 0,
                  padding: "20px 20px",
                  fontSize: "1.2em"
                }}
              >
                <MenuItem onSelect={() => alert("Nombre Usuario")}>
                  <p css={menuItems}>Nombre usuario</p>
                </MenuItem>
                <MenuLink as="a" href="/cart">
                  <p css={menuItems}>Order</p>
                </MenuLink>
                <MenuItem onSelect={() => alert("Logout")}>
                  <p css={menuItems}>Logout</p>
                </MenuItem>
              </MenuList>
            </Menu>

            <h1 css={{ color: "#FFFFFF", fontSize: "1.5em" }}>
              Uber Eats Clone
            </h1>
          </>
        ) : (
          <Link to="/" css={{ ...buttonMenu, textDecoration: "none" }}>
            &lt; Back
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
