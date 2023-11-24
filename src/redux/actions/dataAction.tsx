import { gql } from '@apollo/client';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

// Action creators for fetching product data
export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (productData: any) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: productData,
});

export const fetchProductFailure = (error: any) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

// GraphQL query to fetch product data
export const GET_PRODUCT_DATA = gql`
  query GetProductData($barcode: String!) {
    product(barcode: $barcode) {
      id
      product_name
      // Add more fields based on API response structure
    }
  }
`;
