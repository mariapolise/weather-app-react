import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="col-sm-6.5 city-search">
      <span className="search-bar">
        <form className="city-search">
          <input type="text" name="city-input" className="city-input" />
          <input
            type="submit"
            className="btn btn-secondary"
            value="Search"
            autoComplete="off"
          />
        </form>
      </span>
    </div>
  );
}
