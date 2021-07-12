import React, { useEffect, useState } from "react";
import "./body.css";

import queryString from "query-string";
import Card from "./Card";

function Body({ filter: search, products, collectedKeys }) {
  let filprod;
  console.log("collectedKEys", collectedKeys);
  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter((product) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(product[key])) {
          return product[key].some((keyEle) => filters[key].includes(keyEle));
        }
        return filters[key].includes(product[key]);
      });
    });
  };

  const searchProducts = () => {
    const filteredProducts = multiPropsFilter(products, collectedKeys);
    console.log(filteredProducts);
    filprod = filteredProducts.filter((product) => {
      return product.type.toLowerCase().includes(search.category);
    });
  };

  searchProducts();

  return (
    <section className="main-container">
      <div className="shoes_container">
        {filprod.map((shoe) => {
          return <Card shoe={shoe} />;
        })}
      </div>
    </section>
  );
}

export default Body;
