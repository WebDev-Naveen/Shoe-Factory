export const addToCart = (cartItems) => ({
  type: "ADDTOCART",
  payload: cartItems,
});
export const increment = (Items) => ({
  type: "INCREMENT",
  payload: Items,
});
export const decrement = (Items) => ({
  type: "DECREMENT",
  payload: Items,
});
export const addToFavourite = (productId) => ({
  type: "ADDTOFAV",
  payload: productId,
});
export const removeFavourite = (productId) => ({
  type: "REMOVEFAV",
  payload: productId,
});
