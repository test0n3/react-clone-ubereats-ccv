/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetRestaurants } from "../action-hooks";
import { useRestaurants, useUser } from "../selectors";
import { Link, Redirect } from "@reach/router";

function RestaurantList() {
  const restaurants = useRestaurants();
  const getRestaurants = useGetRestaurants();
  const user = useUser();
  console.log(user);
  React.useEffect(() => {
    getRestaurants();
  }, []);

  if (!user) return <Redirect to="/login" noThrow />;

  return (
    <>
      <h2>Restaurants</h2>
      {restaurants.map(restaurant => {
        return (
          <article>
            <h3>
              <Link to={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </h3>
            <h3>{restaurant.name}</h3>
            <span>{restaurant.price_type}</span>
          </article>
        );
      })}
    </>
  );
}

export default RestaurantList;
