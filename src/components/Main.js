import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import SideNav from "./SideNav";
import Body from "./Body";
import { useSelector } from "react-redux";

function Main(props) {
  const products = useSelector((state) => state.wishreducer);
  console.log(products);
  const [filter, setFilter] = useState({
    category: "",
    gender: {
      men: false,
      women: false,
      unisex: false,
    },
    brand: {
      nike: false,
      adidas: false,
      puma: false,
    },
  });
  const [collectedKeys, setCollectedKeys] = useState({});

  return (
    <main style={{ minHeight: "700px", display: "flex" }}>
      <SideNav
        filter={filter}
        setFilter={setFilter}
        setCollectedKeys={setCollectedKeys}
      />
      <Body filter={filter} products={products} collectedKeys={collectedKeys} />
    </main>
  );
}

export default Main;
