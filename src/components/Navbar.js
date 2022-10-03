import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid ">
        <h2 className="navbar-brand">DietDiary</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse  " id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Diary
              </a>
            </li>
            <li className="nav-item">
              <Link to="/GoalsPage" className="nav-link" aria-current="page">
                Goals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
