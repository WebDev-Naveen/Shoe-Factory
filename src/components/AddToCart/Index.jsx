import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./addtocart.css";
import CartItems from "./CartItems";
function AddToCart() {
  const history = useHistory();
  const cartItems = useSelector((state) => state.reducer.cart);
  console.log(cartItems);
  let total = 0;
  cartItems.forEach((cartItem) => {
    console.log(cartItem);
    let price = cartItem.price.split("$");
    price = Number(price[1]);
    total += price * cartItem.qty;
    return total;
  });

  console.log(total);
  return (
    <div className="main_cart_container">
      <div className="header_cart">AddToCart</div>
      <div className="container">
        {cartItems.length === 0 ? (
          <p>There is no item in cart, Go to home and add item to cart</p>
        ) : (
          cartItems.map((cartItem) => {
            return <CartItems key={cartItem.id} cartItem={cartItem} />;
          })
        )}
      </div>
      <div className="total_amount">
        <span
          style={{
            textAlign: "center",
            width: "50px",

            color: "#fff",
            padding: "5px",
            borderRadius: "8px",
          }}
        >
          Total
        </span>
        <span
          style={{
            paddingTop: "5px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          ${total || 0}
        </span>
        <button
          disabled={cartItems.length === 0}
          onClick={() => history.push("/checkout")}
          style={{
            border: "none",
            outline: "none",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#150e56",
            color: "#fff",
            marginTop: "5px",
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
