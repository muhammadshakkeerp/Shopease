import { Action,  } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"; // Update the path as per your file structure
import {
  ConfirmationResult,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

// Action Types
export const SET_CONFIRMATION_RESULT = "SET_CONFIRMATION_RESULT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

interface setConfirmationResultAction {
  type: typeof SET_CONFIRMATION_RESULT;
  payload: ConfirmationResult | null;
}

// Action Creators
export const setConfirmationResult = (
  confirmationResult: ConfirmationResult | null
): setConfirmationResultAction => ({
  type: SET_CONFIRMATION_RESULT,
  payload: confirmationResult,
});

export const loginSuccess = (): Action => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (): Action => ({
  type: LOGIN_FAILURE,
});

// Async action to sign in with phone number
export const signInWithPhoneNumberAction = (
  phoneNumber: string,
  appVerifier: any
): ThunkAction<void, RootState, undefined, Action<string>> => {
  return async (dispatch) => {
    const auth = getAuth();
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      dispatch(setConfirmationResult(confirmationResult));
    } catch (error) {
      dispatch(loginFailure());
      // Handle error (SMS not sent)
    }
  };
};
