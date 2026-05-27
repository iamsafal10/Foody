import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../slices/CartSlice";
import CategorySliceReducer from "../slices/CategorySlice";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    category: CategorySliceReducer,
  },
});
export default store;
