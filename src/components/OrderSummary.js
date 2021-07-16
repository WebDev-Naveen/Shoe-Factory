import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { increment, decrement } from "../actions/myaction";
function OrderSummary({ item }) {
  const history = useHistory();
  console.log(item);
  const dispatch = useDispatch();
  function handleIncrement() {
    const id = item.id;
    dispatch(increment(id));
  }
  function handleDecrement() {
    const id = item.id;

    dispatch(decrement(id));
  }

  return (
    <div className="order_summary">
      <div className="order_detail">
        <div className="order_img_container">
          <img
            src={window.location.origin + `/images/${item.img}`}
            alt="Adidas Yezzy"
            width="100"
            height="100"
          />
        </div>
        <div className="product_detail">
          <div className="order_name">{item.name}</div>
          <div className="order_quantity">
            <span className="action" onClick={handleIncrement}>
              +
            </span>
            <span>{item.qty}</span>
            <span className="action" onClick={handleDecrement}>
              -
            </span>
            <span>x</span>
            <span>{item.price}</span>
          </div>
        </div>
        <span>X</span>
      </div>
    </div>
  );
}

export default OrderSummary;
