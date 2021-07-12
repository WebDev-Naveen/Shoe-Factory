import React, { useEffect, useState } from "react";
import queryString from "query-string";
import SideNav from "./SideNav";
import Body from "./Body";

const products = [
  {
    id: "id_1",
    name: "Nike FootBall ",
    brand: "nike",
    type: "football",
    gender: "unisex",
    Price: "$1200",
    imgSrc: "nike football unisex 2.jpg",
    fav: "false",
  },
  {
    id: "id_2",
    name: "Nike FootBall 2 ",
    brand: "nike",
    type: "football",
    gender: "unisex",
    Price: "$1400",
    imgSrc: "nike football unisex.jpg",
    fav: "false",
  },
  {
    id: "id_3",
    name: "Nike Running ",
    brand: "nike",
    type: "running",
    gender: "unisex",
    Price: "$2200",
    imgSrc: "Nike Running men Shoes.jpg",
    fav: "false",
  },
  {
    id: "id_4",
    name: "Nike Running 2 ",
    brand: "nike",
    gender: "men",
    type: "running",
    Price: "$2300",
    imgSrc: "Nike Running.jpg",
    fav: "false",
  },
  {
    id: "id_5",

    name: "Nike Red Running  ",
    brand: "nike",
    type: "running",
    gender: "unisex",
    Price: "$2500",
    imgSrc: "Nike Red Running.jpg",
    fav: "false",
  },
  {
    id: "id_6",
    name: "Puma Running  ",
    brand: "puma",
    type: "running",
    gender: "women",
    Price: "$1000",
    imgSrc: "Puma Running.jpg",
    fav: "false",
  },
  {
    id: "id_7",
    name: "Puma BasketBall ",
    brand: "puma",
    type: "Basketball",
    gender: "men",
    Price: "$1500",
    imgSrc: "Puma BasketBall.jpg",
    fav: "false",
  },
  {
    id: "id_8",
    name: "Adidas Yezzy 350",
    brand: "adidas",
    type: "gym",
    gender: "women",
    Price: "$4300",
    imgSrc: "Adidas Yezzy 350.jpg",
    fav: "false",
  },
  {
    id: "id_9",
    name: "Adidas Yezzy Black",
    brand: "adidas",
    type: "running",
    gender: "men",
    Price: "$5000",
    imgSrc: "Adidas Yezzy Black.jpg",
    fav: "false",
  },
  {
    id: "id_10",
    name: "Adidas Football",
    brand: "adidas",
    type: "football",
    gender: "unisex",
    Price: "$5000",
    imgSrc: "Adidas-football.jpg",
    fav: "false",
  },
  {
    id: "id_11",
    name: "Adidas Basketball",
    brand: "adidas",
    type: "basketball",
    gender: "men",
    Price: "$5000",
    imgSrc: "Adidas-basketball.jpg",
    fav: "false",
  },
  {
    id: "id_12",
    name: "Adidas Yezzy Black",
    brand: "adidas",
    type: "gym",
    gender: "unisex",
    Price: "$5000",
    imgSrc: "Adidas-yezzy-black.jpg",
    fav: "false",
  },
  {
    id: "id_13",
    name: "Adidas Yezzy 450",
    brand: "adidas",
    type: "gym",
    gender: "unisex",
    Price: "$5000",
    imgSrc: "Adidas-yezzy.jpg",
    fav: "false",
  },
  {
    id: "id_14",
    name: "Adidas Football Women",
    brand: "adidas",
    type: "football",
    gender: "women",
    Price: "$5000",
    imgSrc: "Adidas-football.jpg",
    fav: "false",
  },
  {
    id: "id_15",
    name: "Nike Basketball White",
    brand: "nike",
    type: "Basketball",
    gender: "men",
    Price: "$5000",
    imgSrc: "Nike-basketball-white.jpg",
    fav: "false",
  },
  {
    id: "id_16",
    name: "Nike Running Green",
    brand: "Nike",
    type: "running",
    gender: "men",
    Price: "$5000",
    imgSrc: "Nike-green-running.jpg",
    fav: "false",
  },
  {
    id: "id_17",
    name: "Nike Gym",
    brand: "Nike",
    type: "gym",
    gender: "women",
    Price: "$5000",
    imgSrc: "Nike-gym.jpg",
    fav: "false",
  },
  {
    id: "id_18",
    name: "Puma Running Unisex",
    brand: "puma",
    type: "running",
    gender: "unisex",
    Price: "$5000",
    imgSrc: "Puma-unisex-running.jpg",
    fav: "false",
  },
];
function Main(props) {
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
  const param = queryString.parse(window.location.search);
  const { category } = param;
  console.log(category);
  console.log(filter);

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
