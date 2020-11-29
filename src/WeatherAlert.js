import React from "react";
import "./WeatherAlert.css";

export default function WeatherAlert(props) {
  return (
    <div className="row d-flex flex-nowrap">
      <div className="col weather-alert">
        Humidity: {props.humidity}%, Wind Speed: {props.wind}kph
      </div>
    </div>
  );
}
