import React from "react";
import { useSelector } from "react-redux";
import Favourite from "./Favourite";
import "./wishlist.css";
function Wishlist() {
  let products = useSelector((state) => state.wishreducer);
  products = products.filter((product) => {
    return product.fav === true;
  });
  return (
    <div className="wish_list_container">
      <div className="header_fav">Favourites</div>
      <div className="list_container">
        {products.length === 0 ? (
          <p>
            There is no item in wishList , Go to home page and add Favourite
            Items
          </p>
        ) : (
          products.map((product) => {
            return <Favourite key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
}
export default Wishlist;
