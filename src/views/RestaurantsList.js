/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetRestaurants } from "../action-hooks";
import { useRestaurants } from "../selectors";
import { Link } from "@reach/router";

function RestaurantList() {
  const restaurants = useRestaurants();
  const getRestaurants = useGetRestaurants();

  React.useEffect(() => {
    getRestaurants();
  }, []);

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
