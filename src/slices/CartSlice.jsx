import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
// state is an object here of array as a key
// state.cartItems is an array of objects in which object is getting pushed
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cartItems.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != actions.payload.id
      );
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
