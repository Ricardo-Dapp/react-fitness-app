import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import FoodTracker from "./components/FoodTracker";

function App() {
  const [diaryDate, SetDiaryDate] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    document.body.style = "background: rgb(26, 33, 39);";
  }, []);
  return (
    <div className="App">
      <Header date={currentDate} />

      <FoodTracker mealTime={"Breakfast"} />
      <FoodTracker mealTime={"Lunch"} />
      <FoodTracker mealTime={"Dinner"} />
      <FoodTracker mealTime={"Snacks"} />
    </div>
  );
}

export default App;
