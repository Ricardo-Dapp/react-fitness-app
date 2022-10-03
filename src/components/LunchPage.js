import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLunchItem } from "../features/LunchListSlice";

function LunchPage() {
  const dispatch = useDispatch();

  const [food, setFood] = useState({
    name: "",
    calories: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addLunchItem(food));
    setFood({ name: "", calories: 0 });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFood((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="m-5">
      <div className="row g-3 align-items-center text-center justify-content-center">
        <h1 className="">Add Lunch Items</h1>

        <div className="col-auto">
          <input
            type="text"
            name="name"
            id="inputFoodName"
            className="form-control"
            placeholder="Food Name"
            value={food.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            name="calories"
            id="inputCalories"
            className="form-control"
            placeholder="Calories"
            value={food.calories || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleSubmit}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default LunchPage;
