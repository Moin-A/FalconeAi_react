import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { apiMiddleware } from "./middleware/apiMiddleware";

// const store = createStore(reducer, [...getDefaultMiddleware(), apiMiddleware]);
const store = configureStore({
  reducer: RootReducer,
  middleware: [...getDefaultMiddleware(), apiMiddleware],
});

export default store;
