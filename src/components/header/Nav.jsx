import React from "react";
import wishlist from "./wishlist.png";
import shoppingCart from "./shopping-cart.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
  const listVal = useSelector((state) => state.listreducer);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });
  let style = {};
  if (isDesktopOrLaptop) {
    style = { display: listVal ? "none" : "flex" };
  }
  console.log(isDesktopOrLaptop);
  return (
    <nav className="nav-bar" style={style}>
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
      </div>
    </nav>
  );
}
export default Nav;
