import React from "react";
import "./CurrentIcon.css";

export default function CurrentIcon(props) {
  return (
    <div className="col-6">
      <span>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.conditions} className="current-icon" />
      </span>
    </div>
  );
}
