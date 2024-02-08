import { Dispatch } from "redux";
import { FetchProducts } from "../../types/globalTypes";
import { gql, useQuery } from "@apollo/client";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AnyAction } from "@reduxjs/toolkit";
import { client } from "../../apollo/client";

// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

interface fetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}
interface fetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: FetchProducts[];
}
interface fatchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}
export type DataFunctionsTypes =
  | fetchDataRequestAction
  | fetchDataSuccessAction
  | fatchDataFailureAction;

export const fetchDataRequest = (): fetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: FetchProducts[]): fetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): fatchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(fetchDataRequest());
      const GET_PRODUCTS = gql`
      query {
        products {
          id
          title 
          price
          description
          category
          image
          rating {
            rate
            count
          }
        }
      }
      `
      const { data, error, loading } = await client.query({ query: GET_PRODUCTS })
      dispatch(fetchDataSuccess(data.products));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchDataFailure(error.message));
      } else {
        dispatch(fetchDataFailure("An unknown error occurred"));
      }

    }
  };

};

