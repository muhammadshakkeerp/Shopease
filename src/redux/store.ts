import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import searchReducer from "./reducers/searchReducer";
// import authReducer, { AuthState } from "./reducers/authReducer";
import dataReducer from "./reducers/dataReducer";
import DarkReducer from "./reducers/DarkReducer";

export type CartState = ReturnType<typeof cartReducer>;
export type DataState = ReturnType<typeof dataReducer>;
export type DarkState = ReturnType<typeof DarkReducer>;

export type RootState = {
  cart: CartState;
  data: DataState;
  // auth: AuthState;
  dark:DarkState
};

const rootReducer = combineReducers({
  cart: cartReducer,
  data: dataReducer,
  search: searchReducer,
  // auth: authReducer,
  dark:DarkReducer
});

// Define any additional middleware here
const additionalMiddleware: Middleware[] = [
  // Add any custom middleware you want to include here
  // For example: customLoggerMiddleware, customThunkMiddleware, etc.
];

// Create the Redux store with middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(additionalMiddleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;
