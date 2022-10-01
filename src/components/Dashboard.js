import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [calorieTracker, setCalorieTracker] = useState(2000);

  return (
    <div className="m-5">
      <h2>Calories Remaining</h2>
      <div>
        <h4>
          Goal: 2000 - <span>Food: 0</span> = <span>Remaining: 2000</span>
        </h4>
      </div>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Breakfast</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>
            <Link to="/BreakfastPage">
              <button className="btn btn-primary">ADDFOOD</button>
            </Link>
          </div>

          <span class="badge bg-primary rounded-pill">500 cal</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Lunch</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>

            <button className="btn btn-primary">ADDFOOD</button>
          </div>
          <span class="badge bg-primary rounded-pill">0 cal</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Dinner</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>

            <button className="btn btn-primary">ADDFOOD</button>
          </div>
          <span class="badge bg-primary rounded-pill">0 cal</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Snack</div>
            <ul className="d-flex flex-column mb-3">
              <li className="">
                OatMeal <small className="">300 cal</small>
              </li>
              <li className="">
                Protein Shake <small className="">200 cal</small>
              </li>
            </ul>

            <button className="btn btn-primary">ADDFOOD</button>
          </div>
          <span class="badge bg-primary rounded-pill">0 cal</span>
        </li>
      </ul>
    </div>
  );
}
