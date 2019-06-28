/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetRestaurants } from "../action-hooks";
import { useRestaurants } from "../selectors";
import { Link } from "@reach/router";
import Header from "./Header";

function RestaurantList() {
  const linkTitle = { margin: 5, padding: 0 };
  const linkAddress = { margin: 5, padding: 0 };
  const linkType = { margin: 5, padding: 0 };
  const restaurants = useRestaurants();
  const getRestaurants = useGetRestaurants();

  React.useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  return (
    <>
      <Header />
      <h2>Restaurants</h2>
      <section
        css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {restaurants.map((restaurant, index) => {
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
                css={{ textDecoration: "none" }}
              >
                <section>
                  <h3 css={linkTitle}>{restaurant.name}</h3>
                  <p css={linkAddress}>{restaurant.address["name"]}</p>
                  <p css={linkType}>{restaurant.price_type}</p>
                </section>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
{
  /* 
      
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
