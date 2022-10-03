import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const LunchListSlice = createSlice({
  name: "lunch",
  initialState,
  reducers: {
    addLunchItem: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addLunchItem } = LunchListSlice.actions;

export default LunchListSlice.reducer;
