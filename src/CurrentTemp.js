import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  if (props.unit==="celcius"){
  return (
    <div className="col-6">
      <span className="current-temp">{props.temperature}</span>
      <span className="current-temp">°C</span>
    </div>
  );
  }
  if (props.unit==="fahrenheit"){
   return (
    <div className="col-6">
      <span className="current-temp">{Math.round(props.temperature*9/5+32)}</span>
      <span className="current-temp">°F</span>
    </div>
  );
  }
  else {return null;}
}
