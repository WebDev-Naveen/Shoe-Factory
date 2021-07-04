import React, { useEffect, useState } from "react";
import "./body.css";
import wishlist from "./header/wishlist.png";
import queryString from "query-string";

function Body({ filter: search, products }) {
  const [btn_color, setColor] = useState(true);
  const [filterShoe, setFilterShoe] = useState(products);

  useEffect(() => {
    filterData();
  }, [products, search]);

  const filterData = () => {
    let temp = products;
    search.category
      ? (temp = temp.filter((e) => e.type === search.category))
      : (temp = temp);

    setFilterShoe(temp);
    console.log("temp", temp);

    // setFilterShoe
  };

  const queryParam = queryString.parse(
    decodeURIComponent(window.location.search)
  );
  console.log(queryParam, queryParam.gender);
  const { gender, brand, category } = queryParam;
  if (gender) console.log(Object.keys(gender));
  // if (gender) {
  //   let arrproduct = [];
  //   let genderFilter = gender.map((genderval) => {
  //     return arrproduct.concat(
  //       products.filter((product) => {
  //         return product.gender === genderval;
  //       })
  //     );
  //   });
  //   console.log(genderFilter);
  // }
  // const multiPropsFilter = (products, filters) => {
  //   const filterKeys = Object.keys(filters);
  //   return products.filter((product) => {
  //     return filterKeys.every((key) => {
  //       if (!filters[key].length) return true;
  //       // Loops again if product[key] is an array (for material attribute).
  //       if (Array.isArray(product[key])) {
  //         return product[key].some((keyEle) => filters[key].includes(keyEle));
  //       }
  //       return filters[key].includes(product[key]);
  //     });
  //   });
  // };
  // console.log(multiPropsFilter());

  // const searchProducts = () => {
  //   const filteredProducts = multiPropsFilter(products, queryParam);
  //   console.log(filteredProducts);
  //   const filprod = filteredProducts.filter((product) => {
  //     return product.name.toLowerCase().includes(queryParam.category);
  //   });
  // };

  // if (queryParam.category) {
  //   console.log(
  //     products.filter((e) => {
  //       return e.type === queryParam.category;
  //     })
  //   );
  // }
  // if (queryParam.gender) {
  //   console;
  // }
  //  console.log(location);
  // const {data} = location?.state;

  //  console.log("hi ",data);
  // useEffect(() => {
  //   let filteredShoes = [];
  //   if (props["gender"]) {
  //     filteredShoes = shoes.filter((shoe) => shoe.gender === props.gender);
  //   }

  //   if (props["brand"]) {
  //     filteredShoes = shoes.filter((shoe) => shoe.brand === props.brand);
  //   }

  //   if (props["type"]) {
  //     filteredShoes = shoes.filter((shoe) => shoe.type === props.type);
  //   }
  //   console.log("brand" in props);
  //   if (
  //     props["type"] !== undefined ||
  //     props["brand"] !== undefined ||
  //     props["gender"] !== undefined
  //   )
  //     setFilterShoe(filteredShoes);
  // }, [props]);

  console.log("Filter in body", search);
  console.log("Product in body", products);

  return (
    <section className="main-container">
      <div className="shoes_container">
        {filterShoe.map((shoe) => {
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
                        e.preventDefault();
                        e.target.style.backgroundColor = btn_color
                          ? "red"
                          : "#fff";
                        setColor(!btn_color);
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
        })}
      </div>
    </section>
  );
}

export default Body;
