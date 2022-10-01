import React from "react";

const FoodTracker = (props) => {
  return (
    <div className="tracker-container">
      <div className="underline-container">
        <div className="meal-container">
          <h2>{props.mealTime}</h2>
          <h2>0</h2>
        </div>
      </div>
      <div className="addFood-input-container">
        <input type="text" placeholder="Add Food" />
        <h5 className="add-food">ADD FOOD</h5>
      </div>
    </div>
  );
};

export default FoodTracker;
