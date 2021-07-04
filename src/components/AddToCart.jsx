import React from "react";
import "./addtocart.css";
function AddToCart() {
  return (
    <div className="main_cart_container">
      <div className="header_cart">AddToCart</div>
      <div className="cart_container">
        <div className="shoe_image">
          <img
            src={window.location.origin + "/images/Nike Running.jpg"}
            alt="nike Running"
            width="120"
            height="120"
          ></img>
        </div>
        <div className="cart_item_desc">
          <span className="item name">Nike Running</span>
          <span className="item brand">Men</span>
          <span className="item price">Price</span>
        </div>
        <div className="cart_item_quantity">
          <button className="qnt_btn">-</button>
          <input
            style={{
              width: "15px",

              textAlign: "center",
            }}
            defaultValue="1"
            placeholder="1"
          />
          <button className="qnt_btn">+</button>
        </div>
      </div>
      <div className="cart_container">
        <div className="shoe_image">
          <img
            src={window.location.origin + "/images/Nike Running.jpg"}
            alt="nike Running"
            width="120"
            height="120"
          ></img>
        </div>
        <div className="cart_item_desc">
          <span className="item name">Nike Running</span>
          <span className="item brand">Men</span>
          <span className="item price">Price</span>
        </div>
        <div className="cart_item_quantity">
          <button className="qnt_btn">-</button>
          <input
            style={{
              width: "15px",
              textAlign: "center",
            }}
            defaultValue="1"
            placeholder="1"
          />
          <button className="qnt_btn">+</button>
        </div>
      </div>
      <div className="cart_container">
        <div className="shoe_image">
          <img
            src={window.location.origin + "/images/Nike Running.jpg"}
            alt="nike Running"
            width="120"
            height="120"
          ></img>
        </div>
        <div className="cart_item_desc">
          <span className="item name">Nike Running</span>
          <span className="item brand">Men</span>
          <span className="item price">Price</span>
        </div>
        <div className="cart_item_quantity">
          <button className="qnt_btn">-</button>
          <input
            style={{
              width: "15px",

              textAlign: "center",
            }}
            defaultValue="1"
            placeholder="1"
          />
          <button className="qnt_btn">+</button>
        </div>
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
