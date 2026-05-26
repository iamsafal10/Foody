import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  caart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(useActionState.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart = state.cart.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default CartSlice.reducer;
