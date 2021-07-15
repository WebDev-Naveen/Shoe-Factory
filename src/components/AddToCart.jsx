import React from "react";
import { useSelector } from "react-redux";
import "./addtocart.css";
import CartItems from "./CartItems";
function AddToCart() {
  const cartItems = useSelector((state) => state.reducer.cart);
  console.log(cartItems);

  return (
    <div className="main_cart_container">
      <div className="header_cart">AddToCart</div>
      <div className="container">
        {cartItems &&
          cartItems.map((cartItem) => {
            return <CartItems key={cartItem.id} cartItem={cartItem} />;
          })}
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
          $2500.00
        </span>
        <button
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
