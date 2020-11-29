import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  return (
    <div className="col-6">
      <span className="current-temp">{props.temperature}</span>
      <span className="current-temp">°C</span>
    </div>
  );
}
