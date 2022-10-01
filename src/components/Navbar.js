import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          DietDiary
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Diary
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Goals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}