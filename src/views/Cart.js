/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Cart({ dishes }) {
  const accepted = false;
  return (
    <>
      {accepted === true ? (
        <>
          <h2>Pickup cart</h2>
          <section>
            <article>
              <header>
                <h2>Restaurant name</h2>
              </header>
              <article>
                <section>
                  <img src="#" alt="Restaurant location" />
                </section>
                <section>
                  <h3>Restaurant name</h3>
                  <p>
                    Restaurant Address, <br />
                    Restaurant phone
                  </p>
                </section>
              </article>
            </article>
          </section>
          <section>
            <table>
              <thead>
                <tr>
                  <td>Product</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product1</td>
                  <td>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </td>
                  <td>$ 3.00</td>
                  <td>
                    <button>X</button>
                  </td>
                </tr>
                <tr>
                  <td>Product2</td>
                  <td>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </td>
                  <td>$ 2.59</td>
                  <td>
                    <button>X</button>
                  </td>
                </tr>
              </tbody>
              <tfooter>
                <tr>
                  <td colspan="2">Total</td>
                  <td colspan="2">$ 5.59</td>
                </tr>
              </tfooter>
            </table>
            <button>Submit</button>
            <button>Cancel</button>
          </section>
        </>
      ) : (
        <>
          <section>Aqui va el mapa</section>
          <section>
            <article>
              <p>
                ETA
                <br />
                Current time
              </p>
              <p>
                15:00
                <br />
                01:05 PM
              </p>
            </article>
            <article>
              <button>Pickup Successful</button>
              <button>Cancel pickup</button>
            </article>
          </section>
        </>
      )}
    </>
  );
}
export default Cart;
