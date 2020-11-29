import React from "react";
import "./CurrentTempRange.css";

export default function CurrentTempRange(props) {
  return (
    <div className="col current-temp-range">
      <span className="current-temp-max">{props.tempMax}</span>
      <span className="current-temp-max-unit">°C</span>/
      <span className="current-temp-min">{props.tempMin}</span>
      <span className="current-temp-min-unit">°C</span>
    </div>
  );
}
