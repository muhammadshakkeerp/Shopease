import { FetchProducts } from "../../types/productTypes";
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