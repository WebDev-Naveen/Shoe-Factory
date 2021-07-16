import React, { useState } from "react";
import queryString from "query-string";
import "./sidenav.css";
import expandmore from "./expandmore.png";
import expandless from "./expandless.png";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
console.log(useParams);
function SideNav({ filter, setFilter, setCollectedKeys }) {
  const listVal = useSelector((state) => state.listreducer);
  console.log(listVal);
  const [expandgender, setExpandGender] = useState(true);
  const [expandbrand, setExpandBrand] = useState(true);

  let queryParameters = {};
  let filterValues = {};
  const history = useHistory();

  const queryParam = queryString.parse(window.location.search);

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
  //   const filteredProducts = multiPropsFilter(
  //     props.products,
  //     filteredCollected()
  //   );
  //   console.log(filteredProducts);
  //   const filprod = filteredProducts.filter((product) => {
  //     return product.name.toLowerCase().includes(filter.category);
  //   });
  //   console.log(filprod);
  // };
  // searchProducts();
  // props.handleProducts(searchProducts);
  // console.log(searchProducts);
  // // console.log(Brand);
  // console.log(category);
  console.log(filter);
  function handleCategory(e, categoryType) {
    let temp = { ...filter };
    if (categoryType === "category") {
      temp.category = e.target.value;
    } else if (categoryType === "gender") {
      temp.gender[e.target.name] = e.target.checked;
    } else if (categoryType === "brand") {
      temp.brand[e.target.name] = e.target.checked;
    }
    filterValues = { ...temp };
    setFilter(temp);
    filteredCollected();
    // console.log(filter);
  }

  function filteredCollected() {
    const collectedTrueKeys = {
      brand: [],
      gender: [],
    };
    const { brand, gender } = filterValues;
    for (let brandKey in brand) {
      if (brand[brandKey]) collectedTrueKeys.brand.push(brandKey);
    }
    for (let genderKey in gender) {
      if (gender[genderKey]) collectedTrueKeys.gender.push(genderKey);
    }
    if (collectedTrueKeys) setCollectedKeys(collectedTrueKeys);
    let filterCategory = "";
    if (filterValues.category) {
      filterCategory = filterValues.category;

      queryParameters = {
        ...queryParam,
        category: filterCategory,
        brand: collectedTrueKeys.brand,
        gender: collectedTrueKeys.gender,
      };
    } else {
      queryParameters = {
        ...queryParam,

        brand: collectedTrueKeys.brand,
        gender: collectedTrueKeys.gender,
      };
    }
    history.push({
      path: "/filter",
      search: queryString.stringify(queryParameters),
    });
  }

  function handleExpandGender(e) {
    setExpandGender(!expandgender);
  }
  function handleExpandBrand(e) {
    setExpandBrand(!expandbrand);
  }

  //yaha jitne bhi link h unme ek filter object bna ke route krwa
  return (
    <nav className="sidenav" style={{ display: listVal ? "none" : "flex" }}>
      <div className="side-nav-links">
        <button
          style={{
            backgroundColor: filter.category === "running" ? "#39A2DB" : null,
          }}
          value="running"
          name="category"
          onClick={(e) => handleCategory(e, "category")}
        >
          Running
        </button>

        <button
          style={{
            backgroundColor:
              filter.category === "basketball" ? "#39A2DB" : null,
          }}
          value="basketball"
          name="category"
          onClick={(e) => handleCategory(e, "category")}
        >
          BasketBall
        </button>

        <button
          style={{
            backgroundColor: filter.category === "gym" ? "#39A2DB" : null,
          }}
          value="gym"
          name="category"
          onClick={(e) => handleCategory(e, "category")}
        >
          Gym
        </button>
        <button
          style={{
            backgroundColor: filter.category === "football" ? "#39A2DB" : null,
          }}
          value="football"
          name="category"
          onClick={(e) => handleCategory(e, "category")}
        >
          FootBall
        </button>
      </div>

      <div className="gender-details">
        <div className="gender">
          <button className="gender_btn btn" onClick={handleExpandGender}>
            <span>Gender</span>
            {expandgender ? (
              <img src={expandless} width="25" height="25" alt="expandless" />
            ) : (
              <img src={expandmore} width="25" height="25" alt="expandmore" />
            )}
          </button>
        </div>
        {expandgender && (
          <div className="All-checkBox">
            <div className="men checkbox">
              <input
                type="checkbox"
                id="men"
                className="check"
                checked={filter.gender["men"]}
                name="men"
                onChange={(e) => handleCategory(e, "gender")}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="women checkbox">
              <input
                type="checkbox"
                className="check"
                id="women"
                checked={filter.gender["women"]}
                name="women"
                onChange={(e) => handleCategory(e, "gender")}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="unisex checkbox">
              <input
                type="checkbox"
                className="check"
                id="unisex"
                name="unisex"
                checked={filter.gender["unisex"]}
                onChange={(e) => handleCategory(e, "gender")}
              />
              <label htmlFor="unisex">Unisex</label>
            </div>
          </div>
        )}
      </div>
      <div className="brand_name">
        <div className="brand_details">
          <button className="brand_btn btn" onClick={handleExpandBrand}>
            <span>Brand</span>
            {expandbrand ? (
              <img src={expandless} width="25" height="25" alt="expandless" />
            ) : (
              <img src={expandmore} width="25" height="25" alt="expandmore" />
            )}
          </button>
        </div>
        {expandbrand && (
          <div className="All-checkBox">
            <div className="Nike checkbox">
              <input
                type="checkbox"
                className="check"
                checked={filter.brand.nike}
                id="nike"
                name="nike"
                onChange={(e) => handleCategory(e, "brand")}
              />
              <label htmlFor="nike">Nike</label>
            </div>
            <div className="Puma checkbox">
              <input
                type="checkbox"
                id="puma"
                className="check"
                // checked={filter.brand.puma}
                name="puma"
                onChange={(e) => handleCategory(e, "brand")}
              />
              <label htmlFor="puma">Puma</label>
            </div>

            <div className="Adidas checkbox">
              <input
                type="checkbox"
                id="adidas"
                className="check"
                checked={filter.brand.adidas}
                name="adidas"
                onChange={(e) => handleCategory(e, "brand")}
              />
              <label htmlFor="adidas">Adidas</label>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default SideNav;
