import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const BreakfastListSlice = createSlice({
  name: "breakfast",
  initialState,
  reducers: {
    addBreakfastItem: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBreakfastItem } = BreakfastListSlice.actions;

export default BreakfastListSlice.reducer;
