/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSelectedRestaurant } from "../selectors";
import { useGetSelectedRestaurant } from "../action-hooks";
import { Link } from "@reach/router";
import Header from "./Header";

function Restaurant({ id }) {
  const getSelectedRestaurant = useGetSelectedRestaurant();
  // const restaurant = useSelectedRestaurant();
  const linkName = { margin: 5, padding: 0, color: "#333333" };
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
  const restaurant = {
    id: 1,
    name: "Pizza Hut Comandante Espinar",
    price_type: "expensive",
    address: {
      name: "Calle 2 de Mayo 202, Miraflores 15074",
      latitud: "-12.1180106",
      longitud: "-77.0370269"
    },
    menu_items: [
      {
        id: 1,
        name: "Pizza Americana grande",
        description: null,
        estimated_time: null,
        price: 14.0
      },
      {
        id: 2,
        name: "Pizza Pepperoni grande",
        description: null,
        estimated_time: null,
        price: 14.0
      }
    ]
  };
  console.log("Restaurant detail - Type id:", typeof id); // string
  console.log("Restaurant detail - id:", id); // string
  console.log("Restaurant detail:", restaurant);

  React.useEffect(() => {
    getSelectedRestaurant(parseInt({ id }));
  }, [id, getSelectedRestaurant]);

  return (
    <>
      <Header fullHeader={false} />
      {/* <h1>{restaurant.id}</h1> */}
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
          <p css={{ fontSize: "0.8em" }}>{restaurant.address["name"]}</p>
        </article>
      </section>
      <section>
        {restaurant.menu_items.map((item, index) => {
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
              <Link
                to={``}
                css={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  "&:hover": { backgroundColor: "#AEAEAE" },
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
                <section css={{ width: "calc(100% - 100px)" }}>
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
                </section>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );

  // return (
  //   <>
  //     <Header />
  // <h2>Pickup cart</h2>
  // <section>
  //   <article>
  //     <header>
  //       <h2>Restaurant name</h2>
  //     </header>
  //     <article>
  //       <section>
  //         <img src="#" alt="Restaurant location" />
  //       </section>
  //       <section>
  //         <h3>Restaurant name</h3>
  //         <p>
  //           Restaurant Address, <br />
  //           Restaurant phone
  //         </p>
  //       </section>
  //     </article>
  //   </article>
  // </section>
  // <section>
  //   <a href="#">
  //     <article>
  //       <section>
  //         <h3>Product Name</h3>
  //         <p>Product description</p>
  //         <p>Product price</p>
  //       </section>
  //       <section>
  //         <img src="#" alt="" />
  //       </section>
  //     </article>
  //   </a>
  //   <a href="#">
  //     <article>
  //       <section>
  //         <h3>Product Name</h3>
  //         <p>Product description</p>
  //         <p>Product price</p>
  //       </section>
  //       <section>
  //         <img src="#" alt="" />
  //       </section>
  //     </article>
  //   </a>
  //   <button>continue to cart</button>
  // </section>
  //   </>
  // );
}

export default Restaurant;
