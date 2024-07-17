import { rowProductsData } from "../../assets/globalUtlities";
import { ProductProps } from "../../types/productTypes";
import { CartFunctionType, CartAction } from "../actions/cartActions";

export interface CartState {
  cart: ProductProps[];
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state = initialState, action: CartFunctionType) => {
  switch (action.type) {
    case CartAction.ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const isAlreadyAdded = state.cart.some(
        (product) => product.id === action.payload
      );

      // eslint-disable-next-line no-case-declarations
      let addedItem: ProductProps[] = [];
      if (!isAlreadyAdded) {
        addedItem = rowProductsData?.filter(
          (item) => item.id === action.payload
        );
      }
      if (addedItem) {
        return { ...state, cart: [...state.cart, ...addedItem] };
      }
      return state;

    case CartAction.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state?.cart?.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
