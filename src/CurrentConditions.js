import React from "react";
import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  return <div className="col current-conditions">{props.conditions}</div>;
}
