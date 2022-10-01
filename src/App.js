import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import FoodTracker from "./components/FoodTracker";
import Dashboard from "./components/Dashboard";
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
        <Route to="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
