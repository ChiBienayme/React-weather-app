import React, { useState, useEffect, useContext } from "react";
import moment from "moment";

import { favContext } from "../App";

import Footer from "../components/Footer";


//CSS
import "../App.css";

export default function Search() {
  // City
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState("Paris");
  const favCity = useContext(favContext);

  // Side effect
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`
    )
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch("Error");
  }, [city]);

  //function handle input/Enter location
  const handleInput = (e) => {
    setWeather(e.target.value); 
  };

  //function handle Submit/SEARCH
  const handleSubmit = () => {
    setCity(weather);
  };

  // Change from F degree to C degree
  const fToC = (f) => {
    return (f - 273.15).toFixed(2);
  };

  //Add more 3 favorite cities
  const getFavorite = () => {
    if (favCity.stockedCity.length <= 3) {
      favCity.stockedCity.push(apiData);
      console.log("favorites", favCity.stockedCity[0].name);
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="App">
     <h1> React Weather App </h1>

      <div className="container">
        <div>
          
          <label  className="location-name"> Enter location :</label>
          
          <input 
            type="text"
            className="location-name"
            onChange={handleInput}
            value={weather}
          />

          <button type="button" onClick={handleSubmit}>
            Search
          </button>

          <button type="button" onClick={getFavorite}>
            Favorite
          </button>
      </div>

        <div className="card">
          {apiData.main ? (
            <div>
              

              {/* Name of city */}
              <h2>
                <strong> {apiData.name.toUpperCase()}</strong>
              </h2>

              {/* Icon */}
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              {/* Temperature of city */}
              <div className="temperature">
                <p> Temp: {Math.floor(fToC(apiData.main.temp))}&deg; C </p>
                <p> Max: {Math.floor(fToC(apiData.main.temp_max))}&deg; C </p>
                <p> Min: {Math.floor(fToC(apiData.main.temp_min))}&deg; C </p>

                
              </div>
              
                {/* Description */}
                <p>
                  {apiData.weather[0].description}
                </p>
              

              {/* Humidity */}
              <p>
                Humidity: {apiData.main.humidity}
              </p>

              {/* DAY */}
              <p className="day">{moment().format('LL')}</p>
             
            </div>

          ) : (
            <h4> Loading... </h4>
          ) }
        </div>
      </div>

      <Footer />
    </div>
  );
}
