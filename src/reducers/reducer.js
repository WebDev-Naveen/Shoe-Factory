const iState = {
  cart: [],
};
const updateQty = (array, id, type) => {
  console.log("arrayaid", array, id, type);
  let index = array.findIndex((e) => e.id === id);
  let temp = [...array];
  if (index >= 0) {
    if (type === "increment") temp[index].qty += 1;
    else if (type === "decrement") {
      if (temp[index].qty === 1) {
        temp = temp.filter((e, i) => i !== index);
      } else {
        temp[index].qty -= 1;
      }
    }
  }

  return temp;
};
const reducer = (state = iState, action) => {
  console.log(action);
  if (action.type === "ADDTOCART") {
    return {
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === "INCREMENT") {
    let temp = updateQty([...state.cart], action.payload, "increment");
    console.log(temp);
    return {
      cart: [...temp],
    };
  } else if (action.type === "DECREMENT") {
    let temp = updateQty([...state.cart], action.payload, "decrement");
    console.log(temp);
    return {
      cart: [...temp],
    };
  }

  return state;
};
export default reducer;
