import React from "react";
import "./CurrentIcon.css";

export default function CurrentIcon(props) {
  return (
    <div className="col-6">
      <span>
        <img src={props.icon} alt={props.conditions} className="current-icon" />
      </span>
    </div>
  );
}
