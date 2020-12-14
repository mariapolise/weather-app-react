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
import PageDate from "./PageDate";

export default function App() {
  const [data, setData] = useState({ ready: false});
  let [city, setCity] = useState(null);
  let [unit, setUnit] = useState("celcius");
  function showCityData(response){
    
    setData ({
    ready: true,  
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    date: new Date(response.data.dt * 1000),
    conditions: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    tempMax: Math.round(response.data.main.temp_max),
    tempMin: Math.round(response.data.main.temp_min),

  }); 
  }
  const [forecastData, setForecastData] = useState({ready: false});
  function showForecastData(response){
    console.log(response);
    setForecastData({
    ready: data.ready,  
    day: "Monday",
        firstDayMax: Math.round(response.data.list[7].main.temp_max),
    firstDayMin: Math.round(response.data.list[7].main.temp_min),
    firstDayIcon: response.data.list[7].weather[0].icon,
    firstDayDescription: response.data.list[7].weather[0].description,
    firstDay: response.data.list[7].dt * 1000,
        secondDayMax: Math.round(response.data.list[15].main.temp_max),
    secondDayMin: Math.round(response.data.list[15].main.temp_min),
    secondDayIcon: response.data.list[15].weather[0].icon,
    secondDayDescription: response.data.list[15].weather[0].description,
    secondDay: response.data.list[15].dt * 1000,
        thirdDayMax: Math.round(response.data.list[23].main.temp_max),
    thirdDayMin: Math.round(response.data.list[23].main.temp_min),
    thirdDayIcon: response.data.list[23].weather[0].icon,
    thirdDayDescription: response.data.list[23].weather[0].description,
    thirdDay: response.data.list[23].dt * 1000,
        forthDayMax: Math.round(response.data.list[31].main.temp_max),
    fourthDayMin: Math.round(response.data.list[31].main.temp_min),
    fourthDayIcon: response.data.list[31].weather[0].icon,
    fourthDayDescription: response.data.list[31].weather[0].description,
    fourthDay: response.data.list[31].dt * 1000,
        fifthDayMax: Math.round(response.data.list[39].main.temp_max),
    fifthDayMin: Math.round(response.data.list[39].main.temp_min),
    fifthDayIcon: response.data.list[39].weather[0].icon,
    fifthDayDescription: response.data.list[39].weather[0].description,
    fifthDay: response.data.list[39].dt * 1000,

  });

};

  function toggleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function toggleCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  };

  function cityInput(event){
    event.preventDefault();
    getCityData(cityInput.value);
  };

  function getCityData() {
  let units = `metric`;
  const apiKey = `aff49264e3b244a0afae2d8202fca638`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=${units}`)
    .then(showCityData);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
  axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=${units}`)
    .then(showForecastData);
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(getLocalData);
}

function getLocalData(position) {
  let latitude = `lat=${position.coords.latitude}`;
  let longitude = `lon=${position.coords.longitude}`;
  let units = `metric`;
  let apiKey = `aff49264e3b244a0afae2d8202fca638`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showCityData);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
  axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showForecastData);
}

  function changeCity(event){
    setCity(event.target.value)

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
        <form className="city-search" onSubmit={cityInput}>
          <input type="text" name="city-input" 
          className="city-input" autoFocus="on" 
          onChange={changeCity}/>
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
      <button type="submit" className="btn btn-secondary local-button" onClick={getLocation}>
        Local
      </button>
    </div>
    <div className="col col-3  toggle-unit-bar">
      <button className="toggle-unit" onClick={toggleCelcius}>°C</button>/
      <button className="toggle-unit" onClick={toggleFahrenheit}>°F</button>
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
                    unit={unit}
                    
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex flex-nowrap">
                  <CurrentTemp temperature={data.temperature} unit={unit}/>
                  <CurrentIcon icon={data.icon} />
                </div>
              </div>
            </div>
            <br />
            <WeatherAlert humidity={data.humidity} wind={data.wind} />
             <div className="row d-flex flex-nowrap">
            <Forecast icon={forecastData.firstDayIcon} max={forecastData.firstDayMax} min={forecastData.firstDayMin} description={forecastData.firstDayDescription} day={forecastData.firstDay} unit={unit}/>
            <Forecast icon={forecastData.secondDayIcon} max={forecastData.secondDayMax} min={forecastData.secondDayMin} description={forecastData.secondDayDescription} day={forecastData.secondDay} unit={unit}/>
            <Forecast icon={forecastData.thirdDayIcon} max={forecastData.thirdDayMax} min={forecastData.thirdDayMin} description={forecastData.thirdDayDescription} day={forecastData.thirdDay} unit={unit}/>
            <Forecast icon={forecastData.fourthDayIcon} max={forecastData.fourthDayMax} min={forecastData.fourthDayMin} description={forecastData.fourthDayDescription} day={forecastData.fourthDay} unit={unit}/>
            <Forecast icon={forecastData.fifthDayIcon} max={forecastData.fifthDayMax} min={forecastData.fifthDayMin} description={forecastData.fifthDayDescription} day={forecastData.fifthDay} unit={unit}/>

            </div>
          </div>
        </div>
      </h1>
      <PageDate date={data.date}/>
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
  navigator.geolocation.getCurrentPosition(defaultLocal);
  function defaultLocal(position){
  let units = `metric`;
  let latitude = `lat=${position.coords.latitude}`;
  let longitude = `lon=${position.coords.longitude}`;
  const apiKey = `aff49264e3b244a0afae2d8202fca638`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showCityData);

     apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
  axios
    .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
    .then(showForecastData); 

  }

  return "Loading";

}
}