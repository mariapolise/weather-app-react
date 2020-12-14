import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let day = props.day;

  if (props.unit==="celcius"){
  return (
    <div className="row d-flex flex-nowrap">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="first-forecast" className="card-text">
              {day}
              <br />
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} className="icon" />
              <br />
              {props.max}°C/{props.min}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  }
  if (props.unit==="fahrenheit"){
   return (
    <div className="row d-flex flex-nowrap">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <span id="first-forecast" className="card-text">
              {props.day}
              <br />
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} className="icon" />
              <br />
              {Math.round(props.max*9/5+32)}°F/{Math.round(props.min*9/5+32)}°F
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  }
  else {return null;}
}
