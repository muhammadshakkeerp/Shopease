

export enum CartAction  {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

interface AddToCartAction {
  type:CartAction.ADD_TO_CART,
  payload:number
}
interface RemoveToCartAction {
  type:CartAction.REMOVE_FROM_CART,
  payload:number
}

export type CartFunctionType = AddToCartAction | RemoveToCartAction

export const addToCart = (itemId: number) => ({
  type: CartAction.ADD_TO_CART,
  payload: itemId ,
});

export const removeToCart = (itemId: number) => ({
  type: CartAction.REMOVE_FROM_CART,
  payload: itemId ,
});
