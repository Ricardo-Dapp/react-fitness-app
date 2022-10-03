import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 2000,
};

export const GoalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addGoal } = GoalsSlice.actions;

export default GoalsSlice.reducer;
