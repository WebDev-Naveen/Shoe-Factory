import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
import OrderSummary from "./OrderSummary";
function Checkout() {
  const cartItems = useSelector((state) => state.reducer.cart);
  console.log(cartItems);
  let total = 0;
  cartItems.map((cartItem) => {
    let price = cartItem.price.split("$");
    price = Number(price[1]);
    total += price * cartItem.qty;
    return total;
  });

  return (
    <section className="checkout_section">
      <div className="payment_details">
        <h3>Payment Detail</h3>
        {/* <label>Name On Card</label> */}
        <p>Name On Card</p>
        <input type="text" name="name" />
        <p>Card Number</p>
        <input type="text" name="CardNumber" />

        <div className="expery_detail">
          <div className="expiration">
            <p>Expiration</p>
            <div className="expiration_detail">
              <input type="text" name="month" />
              <span>/</span>
              <input type="text" name="year" />
            </div>
          </div>
          <div className="cvv">
            <p>CVV</p>
            <input type="text" name="CVV" />
          </div>
        </div>
        <button className="paynow">Pay Now</button>
      </div>
      <div className="order_summary_container">
        {cartItems &&
          cartItems.map((item) => {
            return <OrderSummary item={item} />;
          })}

        <div className="coupen_code">
          <p>Apply Coupen Code</p>
          <div className="coupen_code_area">
            <input type="text" name="coupencode" />
            <button>Apply it!</button>{" "}
          </div>
        </div>
        <div className="total_amount">
          <div className="subtotal amount">
            <p>Subtotal</p>
            <span>${total || 0}</span>
          </div>
          <div className="tax amount">
            <p>Tax</p>
            <span>${total % 10}</span>
          </div>
          <div className="shipping amount">
            <p>Shipping</p>
            <span>${total % 5}</span>
          </div>
          <div className="Total amount">
            <p>Total</p>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
