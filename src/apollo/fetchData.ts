import { Dispatch } from "redux";
import { gql } from "@apollo/client";
import { AnyAction } from "@reduxjs/toolkit";
import { client } from "./client";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../redux/actions/dataAction";

export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
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
    `;
    const { data } = await client.query({ query: GET_PRODUCTS });
    dispatch(fetchDataSuccess(data?.products));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchDataFailure(error.message));
    } else {
      dispatch(fetchDataFailure("An unknown error occurred"));
    }
  }
};
