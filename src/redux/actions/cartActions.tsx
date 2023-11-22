export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (itemId: number) => ({
  type: ADD_TO_CART,
  payload: {itemId} ,
});

export const removeToCart = (itemId: number) => ({
  type: REMOVE_FROM_CART,
  payload: {itemId} ,
});
