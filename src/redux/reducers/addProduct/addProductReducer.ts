// src/reducers/productReducer.ts
import { ADD_PRODUCT } from "../../actions/addProduct/productActions";
import { AddProductType } from "../../../types/globalTypes";

const initialState: AddProductType[] = [];

const addProductReducer = (state = initialState, action: AddProductType) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        if(state){
          return [...state, action.payload]
        }
      };
    default:
      return state;
  }
};

export default addProductReducer;
