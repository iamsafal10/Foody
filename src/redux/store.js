import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../slices/CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
});
export default store;
