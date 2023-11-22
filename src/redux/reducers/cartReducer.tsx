import { rowProductsData } from "../../assets/globalUtlities";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  console.log(action?.payload?.itemId);
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      const findAddedItem = rowProductsData?.filter(
        (item) => item.id === action.payload.itemId
      );
      if (findAddedItem) {
        return {
          ...state,
          items: [...state.items, ...findAddedItem],
        };
      }
      return state;

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: rowProductsData.filter(
          (item) => item.id != action.payload.itemId
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
