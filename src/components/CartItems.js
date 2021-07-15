import React from "react";
import { useDispatch } from "react-redux";

import { increment, decrement } from "../actions/myaction";
function CartItems({ cartItem }) {
  const dispatch = useDispatch();
  function handleIncrement() {
    const id = cartItem.id;
    dispatch(increment(id));
  }
  function handleDecrement() {
    const id = cartItem.id;

    dispatch(decrement(id));
  }
  console.log(cartItem);
  return (
    <>
      <div className="cart_container">
        <div className="shoe_image">
          <img
            src={window.location.origin + `/images/${cartItem.img}`}
            alt="nike Running"
            width="120"
            height="120"
          ></img>
        </div>
        <div className="cart_item_desc">
          <span className="item name">{cartItem.name}</span>
          <span className="item brand"></span>
          <span className="item price">{cartItem.price}</span>
        </div>
        <div className="cart_item_quantity">
          <button className="qnt_btn" onClick={handleDecrement}>
            -
          </button>
          <span className="quantity_val">{cartItem.qty}</span>
          <button className="qnt_btn" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;
