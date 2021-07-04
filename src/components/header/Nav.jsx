import React from "react";
import wishlist from "./wishlist.png";
import shoppingCart from "./shopping-cart.png";
import listicon from "../filter.png";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/register">
          <a href=""> Register </a>
        </Link>
        <Link to="/login">
          <a href="">Login</a>
        </Link>
      </div>

      <div className="nav-icons">
        <Link to="/wishlist">
          <a href="#">
            {" "}
            <img
              className="wishlist"
              src={wishlist}
              alt="wishlist"
              width="35"
              height="35"
            />
          </a>
        </Link>
        <Link to="/addtocart">
          <a href="#">
            <img
              className="cartIcon"
              src={shoppingCart}
              alt="shopping-cart"
              width="26"
              height="26"
            />
          </a>
        </Link>
        <button className="filter_btn">
          <img
            src={listicon}
            alt="list"
            title="Filter"
            width="40"
            height="45"
          />
        </button>
      </div>
    </nav>
  );
}
export default Nav;
