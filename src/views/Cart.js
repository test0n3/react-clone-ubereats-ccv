/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useCartProducts, useGetTotal } from "../selectors";
import {
  useResetCart,
  useAddQuantity,
  useSubstractQuantity,
  useDeleteFromCart
} from "../action-hooks";
import { navigate } from "@reach/router";

function Cart() {
  const [bought, setBought] = React.useState(false);
  const cartProducts = useCartProducts();
  const resetCart = useResetCart();
  const substractQuantity = useSubstractQuantity();
  const addQuantity = useAddQuantity();
  const deleteFromCart = useDeleteFromCart();
  const total = useGetTotal();

  function handleClick() {
    setBought(true);
  }

  return (
    <>
      {bought === false ? (
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
                  <p>Restaurant Address</p>
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
                {cartProducts.map(cartProduct => {
                  return (
                    <tr>
                      <td>{cartProduct.name}</td>
                      <td>
                        <button onClick={() => addQuantity(cartProduct)}>
                          +
                        </button>
                        <span>{cartProduct.quantity}</span>
                        <button
                          onClick={() => {
                            if (cartProduct.quantity > 1) {
                              substractQuantity(cartProduct);
                            }
                          }}
                        >
                          -
                        </button>
                      </td>
                      <td>{cartProduct.price}</td>
                      <td>
                        <button onClick={() => deleteFromCart(cartProduct)}>
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfooter>
                <tr>
                  <td colSpan="2">$ {total}</td>
                  <td colSpan="2">Total</td>
                </tr>
              </tfooter>
            </table>
            <button onClick={() => handleClick}>Submit</button>
            <button
              onClick={() => {
                resetCart();
                navigate("/");
              }}
            >
              Cancel
            </button>
          </section>
          <button onClick={() => navigate("/")}>back</button>
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
