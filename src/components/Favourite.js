import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/myaction";
function Favourite({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer.cart);
  const [data, setData] = useState(false);
  function handleClick() {
    let item = {
      id: product.id,
      img: product.imgSrc,
      name: product.name,
      price: product.Price,
      qty: 1,
    };

    dispatch(addToCart(item));
  }
  useEffect(() => {
    if (cartItems) {
      let index = cartItems.findIndex((e) => e.id === product.id);
      if (index >= 0) {
        setData(true);
      } else {
        setData(false);
      }
    }
  }, [cartItems]);
  return (
    <>
      <div className="wish_list_items">
        <div className="shoes_details_container">
          <div className="shoes_details">
            <img
              src={window.location.origin + `/images/${product.imgSrc}`}
              alt="Nike"
              width="100"
              height="100"
            />
          </div>
          <div className="shoes_desc">
            <span className="name ">{product.name}</span>

            <span className="gender desc">Unisex</span>
            <span className="brand desc">Nike</span>
            <div className="addtocart">
              <span className="price desc">{product.price}</span>
              <button
                className="cart_btn"
                disabled={data}
                onClick={handleClick}
              >
                {data ? "Added To Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourite;
