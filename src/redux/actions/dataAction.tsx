import { Dispatch, AnyAction } from "redux";

import { gql } from "@apollo/client/core";
import { client } from "../../apollo/client";
import { FetchProducts } from "../../types/globalTypes";

// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// action types
interface fetchDataRequesAction {
  type: typeof FETCH_DATA_REQUEST;
}
interface fetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  loading: boolean;
  payload: FetchProducts[];
}
interface fatchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  loading: boolean;
  payload: string;
}
export type DataFunctionsTypes =
  | fetchDataRequesAction
  | fetchDataSuccessAction
  | fatchDataFailureAction;

// Action Creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: FetchProducts[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: FetchProducts[]) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Async Action to Fetch Data
// ... (other imports and code)

// Async Action to Fetch Data
export const fetchData = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(fetchDataRequest());
      const result = await client.query({
        query: gql`
          query GetProducts {
            products {
              id
              title
              descriptionp
              price
              image
            }
          }
        `,
      });
      dispatch(fetchDataSuccess(result.data));
    } catch (error:any) {
      dispatch(fetchDataFailure(error.message)); // Dispatch error message on failure
    }
  };
};

