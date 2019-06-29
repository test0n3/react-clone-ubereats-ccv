/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetRestaurants } from "../action-hooks";
import { useRestaurants, useUser } from "../selectors";
import { Link, Redirect } from "@reach/router";
import Header from "./Header";

function RestaurantList() {
  const linkFormat = { margin: 5, padding: 0 };

  const restaurants = useRestaurants();
  const getRestaurants = useGetRestaurants();
  const user = useUser();
  console.log(user);
  React.useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  if (!user) return <Redirect to="/login" noThrow />;

  return (
    <>
      <Header />
      <h2>Restaurants</h2>
      <section
        css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {restaurants &&
          restaurants.map((restaurant, index) => {
            return (
              <article
                key={index}
                css={{
                  border: "1px solid #ababab",
                  borderRadius: 8,
                  margin: "10px auto",
                  width: "90%"
                }}
              >
                <section
                  css={{
                    width: "100%",
                    height: 150,
                    background:
                      "url('https://via.placeholder.com/400x150.png?text=Restaurant+picture') no-repeat center"
                  }}
                />

                <Link
                  to={`/restaurants/${restaurant.id}`}
                  css={{ textDecoration: "none", color: "#333333" }}
                >
                  <section>
                    <h3 css={linkFormat}>{restaurant.name}</h3>
                    <p css={linkFormat}>{restaurant.address["name"]}</p>
                    <p css={linkFormat}>{restaurant.price_type}</p>
                  </section>
                </Link>
              </article>
            );
          })}
      </section>
    </>
  );
}

export default RestaurantList;
