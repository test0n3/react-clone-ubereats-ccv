/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetRestaurants } from "../action-hooks";
import { useRestaurants } from "../selectors";
import { Link } from "@reach/router";
import Header from "./Header";

function RestaurantList() {
  const restaurants = useRestaurants();
  const getRestaurants = useGetRestaurants();

  React.useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Header />
      <h2>Restaurants List</h2>
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
{
  /* <Header />
      <h2>Restaurants Lists</h2>
      <section
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <button
          css={{
            borderRadius: 8,
            border: "1px solid #ABABAB",
            backgroundColor: "#FFFFFF",
            width: "90%",
            textAlign: "left"
          }}
        >
          <article>
            <section
              css={{
                width: "100%",
                height: 150,
                background:
                  "url('https://via.placeholder.com/400x150.png?text=Restaurant+picture') no-repeat center"
              }}
            >
              {/* <img
                src="https://via.placeholder.com/300x150.png?text=Restaurant+picture"
                alt="Restaurant"
              /> 
            </section>
            <section>
              <h3 css={{ textAlign: "left" }}>Resturant name</h3>
              <p>
                <span>restaurant type</span>
                <span>restaurant type</span>
                <span>restaurant type</span>
              </p>
              <p>pickup time</p>
            </section>
          </article>
        </button>
        <a href="#">
          <article>
            <section>
              <img src="#" />
            </section>
            <section>
              <h3>Resturant name</h3>
              <p>
                <span>restaurant type</span>
                <span>restaurant type</span>
                <span>restaurant type</span>
              </p>
              <p>pickup time</p>
            </section>
          </article>
        </a>
        <a href="#">
          <article>
            <section>
              <img src="#" />
            </section>
            <section>
              <h3>Resturant name</h3>
              <p>
                <span>restaurant type</span>
                <span>restaurant type</span>
                <span>restaurant type</span>
              </p>
              <p>pickup time</p>
            </section>
          </article>
        </a>
        <a href="#">
          <article>
            <section>
              <img src="#" />
            </section>
            <section>
              <h3>Resturant name</h3>
              <p>
                <span>restaurant type</span>
                <span>restaurant type</span>
                <span>restaurant type</span>
              </p>
              <p>pickup time</p>
            </section>
          </article>
        </a>
      </section> */
}

export default RestaurantList;
