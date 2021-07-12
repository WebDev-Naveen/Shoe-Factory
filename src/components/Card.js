import React, { useEffect } from "react";
import { useState } from "react";
import wishlist from "./header/Heart.svg";
function Card({ shoe }) {
  const [btn_color, setColor] = useState(false);

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
          <button className="fav_btn">
            <img
              onClick={(e) => {
                setColor(!btn_color);
              }}
              style={{
                filter:
                  btn_color &&
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
          <button className="cart_btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
