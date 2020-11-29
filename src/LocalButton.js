import React from "react";
import "./LocalButton.css";

export default function LocalButton() {
  return (
    <div className="col-2.5 local-button-bar">
      <button type="submit" className="btn btn-secondary local-button">
        Local
      </button>
    </div>
  );
}
