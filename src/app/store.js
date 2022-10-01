import { configureStore } from "@reduxjs/toolkit";
import foodListReducer from "../features/foodList";

export const store = configureStore({
  reducer: {
    foodList: foodListReducer,
  },
});
