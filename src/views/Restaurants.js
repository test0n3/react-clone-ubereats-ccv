/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import Header from "./Header";
import { useSelectedRestaurant } from "../selectors";
import { useGetSelectedRestaurant, useAddMenuItem } from "../action-hooks";

function Restaurant({ id }) {
  const getSelectedRestaurant = useGetSelectedRestaurant();
  const restaurant = useSelectedRestaurant();
  const addItemToCart = useAddMenuItem();

  React.useEffect(() => {
    getSelectedRestaurant(parseInt(id));
  }, [id, getSelectedRestaurant]);

  function handleClick(item) {
    addItemToCart(item);
  }

  const linkName = {
    margin: 5,
    padding: 0,
    color: "#333333",
    fontWeight: "normal"
  };
  const linkDescription = { margin: 5, padding: 0, color: "#333333" };
  const linkPrice = {
    margin: 5,
    padding: 0,
    color: "#333333",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "end"
  };

  return (
    <>
      <Header fullHeader={false} />
      <section
        css={{
          width: "100%",
          paddingTop: 50,
          background:
            "url('https://via.placeholder.com/400x150.png?text=Restaurant+picture') no-repeat top center",
          marginBottom: 35
        }}
      >
        <article
          css={{
            margin: "0 auto",
            width: "80%",
            borderRadius: 8,
            border: "1px solid #BEBEBE",
            backgroundColor: "rbga(255,255,255,0.7)",
            padding: 10
          }}
        >
          <h2 css={{ fontSize: "1.2em" }}>{restaurant.name}</h2>
          <p css={{ fontSize: "0.8em" }}>
            {restaurant.address && restaurant.address.name}
          </p>
        </article>
      </section>
      <section>
        {restaurant.menu_items &&
          restaurant.menu_items.map((item, index) => {
            return (
              <article
                key={index}
                css={{
                  border: "1px solid #ababab",
                  borderRadius: 8,
                  margin: "10px auto",
                  width: "95%"
                }}
              >
                <section
                  css={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    "@media (min-height: 719px )": {
                      display: "flex",
                      flexDirection: "column"
                    }
                  }}
                >
                  <section
                    css={{
                      minWidth: 100,
                      // height: 150,
                      background:
                        "url('https://via.placeholder.com/400x150.png?text=Item+picture') no-repeat center"
                    }}
                  />
                  <section
                    css={{
                      width: "calc(100% - 100px)",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <h3 css={linkName}>{item.name}</h3>
                    <p css={linkDescription}>{item.description}</p>
                    <p css={linkPrice}>
                      <span css={{ fontSize: "0.8em" }}>US $</span>
                      <span
                        css={{
                          display: "block",
                          minWidth: 50,
                          textAlign: "right"
                        }}
                      >
                        {item.price.toFixed(2)}
                      </span>
                    </p>
                    <button
                      onClick={() => handleClick(item)}
                      css={{
                        margin: "0 auto",
                        width: "95%",
                        border: "none",
                        borderRadius: 8,
                        backgroundColor: "#00e676",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontSize: "1.2em",
                        padding: 10,
                        "&:hover": { backgroundColor: "#00a676" }
                      }}
                    >
                      Add to cart
                    </button>
                  </section>
                </section>
              </article>
            );
          })}
      </section>
      <section
        css={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
          padding: "10px 0",
          backgroundColor: "#FFFFFF"
        }}
      >
        <button
          onClick={() => navigate("/cart")}
          css={{
            backgroundColor: "#00e676",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 8,
            width: "95%",
            padding: 10,
            fontSize: "1.2em",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#00a676" }
          }}
        >
          Checkout
        </button>
      </section>
    </>
  );
}

export default Restaurant;
