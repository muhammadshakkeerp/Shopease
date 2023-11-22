import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";



export type CartState = ReturnType<typeof cartReducer>

export type RootState = {
  cart:CartState
}

// Combine all reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
  auth: authReducer,
  // Add other reducers here if needed
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
