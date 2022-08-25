import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../styles/Header.css";
import { useState } from "react";
const Header = (props) => {
  const [goalCount, setGoalCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);
  const [remainingCount, setRemainingCount] = useState(0);

  return (
    <header className="header-container">
      <div className="date-container">
        <ArrowBackIosIcon className="arrow-back" />
        <h2>
          {props.date.getMonth() + 1} / {props.date.getDate()} /{" "}
          {props.date.getFullYear()}
        </h2>
        <ArrowForwardIosIcon className="arrow-forward" />
      </div>
      <div className="calories-container">
        <h4 className="calories-heading">Calories Remaining</h4>
        <div className="caloriesNumbers-container">
          <h4>
            <span className="calories-title">Goal: </span> {goalCount}
          </h4>
          <h4>-</h4>
          <h4>
            <span className="calories-title"> Food: </span> {foodCount}
          </h4>
          <h4>=</h4>
          <h4>
            <span className="calories-title"> Remaining: </span>
            {remainingCount}
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
