import { rowProductsData } from "../../assets/globalUtlities";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

export interface CartState {
  items: {
    id: number;
    title: string;
    img: string;
    offerAvailable: boolean;
  }[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Do not re-add if already added
      const isAlreadyAdded = state.items.some(
        (product) => product.id === action.payload.itemId
      );

      let findAddedItem: {
        id: number;
        title: string;
        img: string;
        offerAvailable: boolean;
      }[] = [];
      if (!isAlreadyAdded) {
        findAddedItem = rowProductsData?.filter(
          (item) => item.id === action.payload.itemId
        );
      }
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
        items: state?.items?.filter(
          (item) => item.id != action.payload.itemId
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
