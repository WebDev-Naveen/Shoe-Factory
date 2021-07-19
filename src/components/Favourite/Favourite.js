import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/myaction";
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
        <div className="shoess_details_container">
          <div className="shoess_details">
            <img
              className="shoe_img_1"
              src={window.location.origin + `/images/product/${product.imgSrc}`}
              alt="Nike"
              width="100"
              height="100"
            />
          </div>
          <div className="shoess_desc">
            <span className="name ">{product.name}</span>

            <span className="gender_1 desc">Unisex</span>
            <span className="brand_1 desc">Nike</span>
            <div className="addtocart_1">
              <span className="price_1 desc">{product.Price}</span>
              <button
                className="cart_btn_1"
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
