import React, { useEffect, useState } from "react";
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
    type: "gym",
    gender: "men",
    Price: "$5000",
    imgSrc: "Adidas Yezzy Black.jpg",
    fav: "false",
  },
];
function Main(props) {
  const [searchProducts, setProducts] = useState([]);
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

  return (
    <main
      style={{
        marginBottom: "100px",
      }}
    >
      <SideNav filter={filter} setFilter={(e) => setFilter(e)} />
      <Body filter={filter} products={products} />
    </main>
  );
}

export default Main;
