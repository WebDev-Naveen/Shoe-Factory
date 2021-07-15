import React, { useEffect } from "react";
import { useState } from "react";

import wishlist from "./header/Heart.svg";
import {
  addToCart,
  addToFavourite,
  removeFavourite,
} from "../actions/myaction";
import { useSelector, useDispatch } from "react-redux";
function Card({ shoe }) {
  const dispatch = useDispatch();
  const [btn_color, setColor] = useState(true);
  const [data, setData] = useState(false);
  const cartItems = useSelector((state) => state.reducer.cart);
  function handleFav() {
    let temp = btn_color;

    const productId = {
      id: shoe.id,
    };
    if (btn_color) {
      dispatch(addToFavourite(productId));
    } else {
      dispatch(removeFavourite(productId));
    }
    setColor(!temp);
  }

  // console.log(btn_color);

  // console.log(shoe.fav);
  function handleClick() {
    let item = {
      id: shoe.id,
      img: shoe.imgSrc,
      name: shoe.name,
      price: shoe.Price,
      qty: 1,
    };

    dispatch(addToCart(item));
  }
  useEffect(() => {
    if (cartItems) {
      let index = cartItems.findIndex((e) => e.id === shoe.id);
      if (index >= 0) {
        setData(true);
      } else {
        setData(false);
      }
    }
  }, [cartItems]);

  return (
    <div key={shoe.id} className="shoes_details_container" id={shoe.id}>
      <div className="shoes_details">
        <img
          src={window.location.origin + `/images/${shoe.imgSrc}`}
          alt={shoe.name}
          width="300"
          height="300"
        />
      </div>
      <div className="shoes_desc">
        <div className="name_wish">
          <span className="name ">{shoe.name}</span>
          <button className="fav_btn" onClick={handleFav}>
            <img
              style={{
                filter:
                  shoe.fav &&
                  "invert(55%) sepia(100%) saturate(3.5) hue-rotate(120deg)",
              }}
              src={wishlist}
              alt="fav"
              width="30"
              height="30"
            ></img>
          </button>
        </div>
        <span className="gender desc">{shoe.Gender}</span>
        <span className="brand desc">{shoe.Brand}</span>
        <div className="addtocart">
          <span className="price desc">{shoe.Price}</span>
          <button className="cart_btn" disabled={data} onClick={handleClick}>
            {data ? "Added To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
