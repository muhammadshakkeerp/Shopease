import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ConfirmationResult } from "firebase/auth";
import {
  SET_CONFIRMATION_RESULT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/authActions";

export interface AuthState {
  confirmationResult: ConfirmationResult | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  confirmationResult: null,
  isLoggedIn: false,
};

const authReducer = createReducer(initialState, {
  [SET_CONFIRMATION_RESULT]: (
    state: AuthState,
    action: PayloadAction<ConfirmationResult | null>
  ) => {
    state.confirmationResult = action.payload;
  },
  [LOGIN_SUCCESS]: (state: AuthState) => {
    state.isLoggedIn = true;
  },
  [LOGIN_FAILURE]: (state: AuthState) => {
    state.isLoggedIn = false;
  },
});

export default authReducer;
