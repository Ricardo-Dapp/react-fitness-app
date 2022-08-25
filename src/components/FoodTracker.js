import React from "react";
import "../styles/FoodTracker.css";

const FoodTracker = (props) => {
  return (
    <div className="tracker-container">
      <div className="underline-container">
        <div className="meal-container">
          <h2>{props.mealTime}</h2>
          <h2>0</h2>
        </div>
      </div>

      <h5 className="add-food">ADD FOOD</h5>
    </div>
  );
};

export default FoodTracker;
