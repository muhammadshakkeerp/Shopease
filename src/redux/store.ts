import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import searchReducer from "./reducers/searchReducer";
import dataReducer from "./reducers/dataReducer";
import DarkReducer from "./reducers/DarkReducer";
// import authReducer, { AuthState } from "./reducers/authReducer";

export type CartState = ReturnType<typeof cartReducer>;
export type DataState = ReturnType<typeof dataReducer>;
export type DarkState = ReturnType<typeof DarkReducer>;

export type RootState = {
  cart: CartState;
  fetchData: DataState;
  dark: DarkState;
  // auth: AuthState;
};

const rootReducer = combineReducers({
  cart: cartReducer,
  fetchData: dataReducer,
  search: searchReducer,
  dark: DarkReducer,
  // auth: authReducer,
});

const additionalMiddleware: Middleware[] = [];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(additionalMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
