import React from "react";
import "./ToggleUnitBar.css";

export default function ToggleUnitBar() {
  return (
    <div className="col col-3 toggle-unit toggle-unit-bar">
      <button className="toggle-unit">°C</button>/
      <button className="toggle-unit">°F</button>
    </div>
  );
}
