/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSelectedRestaurant } from "../selectors";

function Restaurant({ id }) {
  const restaurant = useSelectedRestaurant(parseInt(id));
  console.log(restaurant);

  return (
    <>
      <h1>{restaurant.id}</h1>
      <h2>{restaurant.name}</h2>
      {/* {restaurant.menu_items.map(item => {
        return (
          <section>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span> | <span>{item.estimated_time}</span>
          </section>
        );
      })} */}
    </>
  );

  // return (
  //   <>
  //     <h2>Pickup cart</h2>
  //     <section>
  //       <article>
  //         <header>
  //           <h2>Restaurant name</h2>
  //         </header>
  //         <article>
  //           <section>
  //             <img src="#" alt="Restaurant location" />
  //           </section>
  //           <section>
  //             <h3>Restaurant name</h3>
  //             <p>
  //               Restaurant Address, <br />
  //               Restaurant phone
  //             </p>
  //           </section>
  //         </article>
  //       </article>
  //     </section>
  //     <section>
  //       <a href="#">
  //         <article>
  //           <section>
  //             <h3>Product Name</h3>
  //             <p>Product description</p>
  //             <p>Product price</p>
  //           </section>
  //           <section>
  //             <img src="#" alt="" />
  //           </section>
  //         </article>
  //       </a>
  //       <a href="#">
  //         <article>
  //           <section>
  //             <h3>Product Name</h3>
  //             <p>Product description</p>
  //             <p>Product price</p>
  //           </section>
  //           <section>
  //             <img src="#" alt="" />
  //           </section>
  //         </article>
  //       </a>
  //       <button>continue to cart</button>
  //     </section>
  //   </>
  // );
}

export default Restaurant;
