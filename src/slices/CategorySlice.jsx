import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, actions) => {
      state.category = actions.payload;
    },
  },
});
export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
