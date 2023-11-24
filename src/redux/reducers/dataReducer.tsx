import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
  } from '../actions/dataAction';
  
  export interface DataState {
    loading: boolean;
    product: any; // Define appropriate type for product data
    error: any;
  }
  
  const initialState: DataState = {
    loading: false,
    product: null,
    error: null,
  };
  
  const dataReducer = (state = initialState, action: any): DataState => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          product: action.payload,
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  