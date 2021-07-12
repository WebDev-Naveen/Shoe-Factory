import React from "react";
import "./checkout.css";
function Checkout() {
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
        <div className="order_summary">
          <div className="order_detail">
            <div className="order_img_container">
              <img
                src="/images/Adidas Yezzy 350.jpg"
                alt="Adidas Yezzy"
                width="100"
                height="100"
              />
            </div>
            <div className="product_detail">
              <div className="order_name">hello</div>
              <div className="order_quantity">
                <span className="action">+</span>
                <span>1</span>
                <span className="action">-</span>
                <span>x</span>
                <span>$7.55</span>
              </div>
            </div>
            <span>X</span>
          </div>
        </div>
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
            <span>$125</span>
          </div>
          <div className="tax amount">
            <p>Tax</p>
            <span>$0</span>
          </div>
          <div className="shipping amount">
            <p>Shipping</p>
            <span>$5</span>
          </div>
          <div className="Total amount">
            <p>Total</p>
            <span>$130</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
