import { products } from "../components/product";

const productList = [...products];
const makeFav = (array, id, type) => {
  console.log("threee", array, id, type);
  let index = array.findIndex((e) => e.id === id);
  let temp = [...array];
  if (index >= 0) {
    if (type === "add") temp[index].fav = true;
    else if (type === "remove") temp[index].fav = false;
  }
  console.log("hello i am temp", temp);
  return temp;
};
const wishreducer = (state = productList, action) => {
  if (action.type === "ADDTOFAV") {
    let temp = makeFav([...productList], action.payload.id, "add");
    console.log("hi i am", temp);
    return (state = [...temp]);
  } else if (action.type === "REMOVEFAV") {
    let temp = makeFav([...productList], action.payload.id, "remove");
    return (state = [...temp]);
  }

  return state;
};
export default wishreducer;
