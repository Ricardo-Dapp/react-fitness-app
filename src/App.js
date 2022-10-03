import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import FoodTracker from "./components/FoodTracker";
import Dashboard from "./components/Dashboard";
import BreakfastPage from "./components/BreakfastPage";
import LunchPage from "./components/LunchPage";
import DinnerPage from "./components/DinnerPage";
import SnackPage from "./components/SnackPage";
import GoalsPage from "./components/GoalsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [diaryDate, SetDiaryDate] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // document.body.style = "background: rgb(26, 33, 39);";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/BreakfastPage" element={<BreakfastPage />}></Route>
        <Route path="/LunchPage" element={<LunchPage />}></Route>
        <Route path="/DinnerPage" element={<DinnerPage />}></Route>
        <Route path="/SnackPage" element={<SnackPage />}></Route>
        <Route path="/GoalsPage" element={<GoalsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
