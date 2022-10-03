import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const calorieTracker = useSelector((state) => state.goals.value);
  const [totalFoodTracker, setTotalFoodTracker] = useState(0);

  const breakfastTracker = useSelector((state) => state.breakfastList.value);
  const [breakfastCaloriesTracker, setBreakfastCaloriesTracker] = useState(0);

  const lunchTracker = useSelector((state) => state.lunchList.value);
  const [lunchCaloriesTracker, setLunchCaloriesTracker] = useState(0);

  useEffect(() => {
    for (let i = 0; i < breakfastTracker.length; i++) {
      setBreakfastCaloriesTracker(
        (prevValue) => prevValue + parseInt(breakfastTracker[i].calories)
      );
      setTotalFoodTracker(
        (prevValue) => prevValue + parseInt(breakfastTracker[i].calories)
      );
    }
    for (let i = 0; i < lunchTracker.length; i++) {
      setLunchCaloriesTracker(
        (prevValue) => prevValue + parseInt(lunchTracker[i].calories)
      );
      setTotalFoodTracker(
        (prevValue) => prevValue + parseInt(lunchTracker[i].calories)
      );
    }
  }, []);

  const breakfastMap = breakfastTracker.map((item, index) => {
    return (
      <li key={index}>
        {item.name} <small>{item.calories} cal</small>
      </li>
    );
  });
  const lunchMap = lunchTracker.map((item, index) => {
    return (
      <li key={index}>
        {item.name} <small>{item.calories} cal</small>
      </li>
    );
  });

  return (
    <div className="m-5">
      <h2>Calories Remaining</h2>
      <div>
        <h4>
          Goal: {calorieTracker} - <span>Food: {totalFoodTracker}</span> ={" "}
          <span>Remaining: {calorieTracker - totalFoodTracker}</span>
        </h4>
      </div>

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Breakfast</div>
            <ul className="d-flex flex-column mb-3">{breakfastMap}</ul>

            <Link to="/BreakfastPage">
              <button className="btn btn-primary">ADDFOOD</button>
            </Link>
          </div>

          <span className="badge bg-primary rounded-pill">
            {breakfastCaloriesTracker} cal
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Lunch</div>
            <ul className="d-flex flex-column mb-3">{lunchMap}</ul>
            <Link to="/LunchPage">
              <button className="btn btn-primary">ADDFOOD</button>
            </Link>
          </div>
          <span className="badge bg-primary rounded-pill">
            {lunchCaloriesTracker} cal
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Dinner</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>

            <Link to="/DinnerPage">
              <button className="btn btn-primary">ADDFOOD</button>
            </Link>
          </div>
          <span className="badge bg-primary rounded-pill">0 cal</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Snack</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>
            <Link to="/SnackPage">
              <button className="btn btn-primary">ADDFOOD</button>
            </Link>
          </div>
          <span className="badge bg-primary rounded-pill">0 cal</span>
        </li>
        <button className="btn btn-primary my-3">Complete Log</button>
      </ul>
    </div>
  );
}
