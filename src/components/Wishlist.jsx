import React from "react";
import "./wishlist.css";
function Wishlist() {
  return (
    <div className="wish_list_container">
      <div className="header_fav">Favourites</div>
      <div className="list_container">
        <div className="wish_list_items">
          <div className="shoes_details_container">
            <div className="shoes_details">
              <img
                src={window.location.origin + "/images/Nike Running.jpg"}
                alt="Nike"
                width="100"
                height="100"
              />
            </div>
            <div className="shoes_desc">
              <span className="name ">Nike Running</span>

              <span className="gender desc">Unisex</span>
              <span className="brand desc">Nike</span>
              <div className="addtocart">
                <span className="price desc">$1200</span>
                <button className="cart_btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wish_list_items">
          <div className="shoes_details_container">
            <div className="shoes_details">
              <img
                src={window.location.origin + "/images/Nike Running.jpg"}
                alt="Nike"
                width="100"
                height="100"
              />
            </div>
            <div className="shoes_desc">
              <span className="name ">Nike Running</span>

              <span className="gender desc">Unisex</span>
              <span className="brand desc">Nike</span>
              <div className="addtocart">
                <span className="price desc">$1200</span>
                <button className="cart_btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wish_list_items">
          <div className="shoes_details_container">
            <div className="shoes_details">
              <img
                src={window.location.origin + "/images/Nike Running.jpg"}
                alt="Nike"
                width="100"
                height="100"
              />
            </div>
            <div className="shoes_desc">
              <span className="name ">Nike Running</span>

              <span className="gender desc">Unisex</span>
              <span className="brand desc">Nike</span>
              <div className="addtocart">
                <span className="price desc">$1200</span>
                <button className="cart_btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wish_list_items">
          <div className="shoes_details_container">
            <div className="shoes_details">
              <img
                src={window.location.origin + "/images/Nike Running.jpg"}
                alt="Nike"
                width="100"
                height="100"
              />
            </div>
            <div className="shoes_desc">
              <span className="name ">Nike Running</span>

              <span className="gender desc">Unisex</span>
              <span className="brand desc">Nike</span>
              <div className="addtocart">
                <span className="price desc">$1200</span>
                <button className="cart_btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wishlist;
