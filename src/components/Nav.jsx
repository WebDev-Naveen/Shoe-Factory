import React from "react";
import wishlist from "./wishlist.png";
import shoppingCart from "./shopping-cart.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
  const listVal = useSelector((state) => state.listreducer);
  const wish = useSelector((state) => state.wishreducer);
  const cart = useSelector((state) => state.reducer.cart);
  const wishList = wish.filter((val) => {
    return val.fav === true;
  });
  const cartlength = cart.length;
  const wishlength = wishList.length;
  // console.log(wish, cart, wishLength, "hello i nkniehhd");
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(max-width: 600px)",
  // });
  // let style = {};
  // if (isDesktopOrLaptop) {
  //   style = { display: listVal ? "none" : "flex" };
  // }
  // console.log(isDesktopOrLaptop);
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
          <img
            className="wishlist"
            src={wishlist}
            alt="wishlist"
            width="34"
            height="34"
          />
          <span
            className="values"
            style={{
              visibility: wishlength > 0 && "visible",
              left: " 32%",
            }}
          >
            {wishlength > 0 && wishlength}
          </span>
        </Link>
        <Link to="/addtocart">
          <img
            className="cartIcon"
            src={shoppingCart}
            alt="shopping-cart"
            width="25"
            height="25"
          />
          <span
            className="values"
            style={{
              visibility: cartlength > 0 && "visible",
            }}
          >
            {cartlength > 0 && cartlength}
          </span>
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
