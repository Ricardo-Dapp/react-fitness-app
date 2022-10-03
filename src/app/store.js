import { configureStore } from "@reduxjs/toolkit";
import foodListReducer from "../features/foodList";
import goalsReducer from "../features/GoalsSlice";
import breakfastListReducer from "../features/BreakfastListSlice";
import LunchListReducer from "../features/LunchListSlice";

export const store = configureStore({
  reducer: {
    foodList: foodListReducer,
    goals: goalsReducer,
    breakfastList: breakfastListReducer,
    lunchList: LunchListReducer,
  },
});
