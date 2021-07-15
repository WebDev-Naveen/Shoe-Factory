import React from "react";

function OrderSummary({ item }) {
  console.log(item);
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
            <span className="action">+</span>
            <span>{item.qty}</span>
            <span className="action">-</span>
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
