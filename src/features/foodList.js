import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const foodListSlice = createSlice({
  name: "foodList",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFood } = foodListSlice.actions;

export default foodListSlice.reducer;
