import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row d-flex flex-nowrap">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="first-forecast" className="card-text">
              {" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="second-forecast" className="card-text">
              {" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="third-forecast" className="card-text">
              {" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="fourth-forecast" className="card-text">
              {" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="fifth-forecast" className="card-text">
              {" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
