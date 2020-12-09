import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import LocalButton from "./LocalButton";
import ToggleUnitBar from "./ToggleUnitBar";
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import CurrentConditions from "./CurrentConditions";
import CurrentTempRange from "./CurrentTempRange";
import CurrentIcon from "./CurrentIcon";
import WeatherAlert from "./WeatherAlert";
import Forecast from "./Forecast";

export default function App() {
  let data = {
    city: "Philadelphia",
    temperature: 20,
    date: "Monday 10:00",
    conditions: "Sunny",
    imgUrl: "http://simpleicon.com/wp-content/uploads/sun.png",
    humidity: 0,
    wind: 10,
    tempMax: 21,
    tempMin: 18
  };
  return (
    <div className="App">
      <div className="container">
      <h1>
        <div className="row d-flex flex-nowrap">
          <div className="col col-12">
            <div className="row d-flex flex-nowrap">
              <Form />
              <LocalButton />
              <ToggleUnitBar />
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
                  <CurrentIcon icon={data.imgUrl} />
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