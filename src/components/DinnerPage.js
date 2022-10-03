import React from "react";

function DinnerPage() {
  return (
    <div className="m-5">
      <div className="row g-3 align-items-center text-center justify-content-center">
        <h1 className="">Add Dinner Items</h1>

        <div className="col-auto">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="Food Name"
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="Calories"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </div>
  );
}

export default DinnerPage;
