import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal } from "../features/GoalsSlice";

function GoalsPage() {
  const input = useSelector((state) => state.goals.value);
  const dispatch = useDispatch();
  const [caloriesCounter, setCalorieCounter] = useState(0);
  const handleSubmit = (event) => {
    dispatch(addGoal(caloriesCounter));
    event.preventDefault();
  };

  return (
    <div className="m-5">
      <div className="row g-3 align-items-center text-center justify-content-center">
        <h1>Daily Calories Goal: {input}</h1>
        <div className="col-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              id="inputCalories"
              className="form-control"
              placeholder="Calories"
              value={caloriesCounter}
              onChange={(e) => setCalorieCounter(e.target.value)}
            />
            <button className="btn btn-primary m-4" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default GoalsPage;
