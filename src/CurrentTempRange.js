import React from "react";
import "./CurrentTempRange.css";

export default function CurrentTempRange(props) {
    if (props.unit==="celcius"){
  return (
    <div className="col current-temp-range">
      <span className="current-temp-max">{props.tempMax}</span>
      <span className="current-temp-max-unit">°C</span>/
      <span className="current-temp-min">{props.tempMin}</span>
      <span className="current-temp-min-unit">°C</span>
    </div>
  );
  }
      if (props.unit==="fahrenheit"){
  return (
    <div className="col current-temp-range">
      <span className="current-temp-max">{Math.round(props.tempMax*9/5+32)}</span>
      <span className="current-temp-max-unit">°F</span>/
      <span className="current-temp-min">{Math.round(props.tempMin*9/5+32)}</span>
      <span className="current-temp-min-unit">°F</span>
    </div>
  );
      }
      else{
        return null;
      }
}
