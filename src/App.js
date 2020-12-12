import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import CurrentConditions from "./CurrentConditions";
import CurrentTempRange from "./CurrentTempRange";
import CurrentIcon from "./CurrentIcon";
import WeatherAlert from "./WeatherAlert";
import Forecast from "./Forecast";

export default function App() {

  const [data, setData] = useState({ ready: false});
  function showCityData(response){
    console.log (response.data)
    setData ({
    ready: true,  
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    date: "Wednesday 2:53pm",
    conditions: response.data.weather[0].description,
    //imgUrl: "http://simpleicon.com/wp-content/uploads/sun.png",
    icon: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    tempMax: Math.round(response.data.main.temp_max),
    tempMin: Math.round(response.data.main.temp_min),
  });
    
    
  }
  if (data.ready){
      return (
    <div className="App">
      <div className="container">
      <h1>
        <div className="row d-flex flex-nowrap">
          <div className="col col-12">
            <div className="row d-flex flex-nowrap">
                  <div className="col-sm-6.5 city-search">
      <span className="search-bar">
        <form className="city-search">
          <input type="text" name="city-input" className="city-input" autoFocus="on"/>
          <input
            type="submit"
            className="btn btn-secondary"
            value="Search"
            autoComplete="off"
          />
        </form>
      </span>
    </div>
    <div className="col-2.5 local-button-bar">
      <button type="submit" className="btn btn-secondary local-button">
        Local
      </button>
    </div>
    <div className="col col-3  toggle-unit-bar">
      <button className="toggle-unit">°C</button>/
      <button className="toggle-unit">°F</button>
    </div>
            </div>

            <div className="row d-flex flex-nowrap">
              <div className="col-6">
                <div className="row">
                  <CurrentCity city={data.city} />
                  <div className="w-100"></div>
                  <CurrentConditions conditions={data.conditions} />
                  <CurrentTempRange
                    tempMax={data.tempMax}
                    tempMin={data.tempMin}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex flex-nowrap">
                  <CurrentTemp temperature={data.temperature} />
                  <CurrentIcon icon={data.icon} />
                </div>
              </div>
            </div>
            <br />
            <WeatherAlert humidity={data.humidity} wind={data.wind} />
            <Forecast />
          </div>
        </div>
      </h1>
      <h3 id="page-date" className="page-date">
        {data.date}
      </h3>
      <br />
      <h3 className="signature">
        <a
          href="https://github.com/mariapolise/weather-app-react"
          className="signature-link"
        >
          Open-source Code
        </a>
        | by Maria Polise
      </h3>
      </div>
    </div>
  );
}
else {
  let city = `q=Philadelphia`;
  let units = `metric`;
  const apiKey = `aff49264e3b244a0afae2d8202fca638`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
    .get(`${apiUrl}${city}&appid=${apiKey}&units=${units}`)
    .then(showCityData);
  return "Loading";

}
}