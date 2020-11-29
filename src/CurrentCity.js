import React from "react";
import "./CurrentCity.css";

export default function CurrentCity(props) {
  return <div className="col current-city">{props.city}</div>;
}
