import { AddProductType } from "../../../types/globalTypes";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const addProduct = (product: AddProductType) => ({
    type: ADD_PRODUCT,
    payload: product,
});
