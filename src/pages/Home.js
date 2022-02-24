import React, { useState, useEffect, useContext } from "react";
import moment from "moment";

import { favContext } from "../App";

import Footer from "../components/Footer";


//CSS
import "../App.css";
import CityCard from "../components/CityCard";

export default function Search() {
  // City
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState([]);
  const favCity = useContext(favContext);

  

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
    if (favCity.stockedCity.length < 3) {
      favCity.stockedCity.push(apiData);

      console.log("favorite", favCity.stockedCity[0].name);

      alert(`${favCity.stockedCity[0].name} is your favorite city`)

    } else {
      console.log("Error");
    }
  };

  // Side effect
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`
    )
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch("Error");
  }, [city]);


  return (
    <div className="App">

     <h1 className="title"> React Weather App </h1>

      <div className="container">
        <div>
          
          <label  className="location-name"> Enter location :</label>
          
          <input 
            type="text"
            placeholder="Paris"
            className="location-name"
            onChange={handleInput}
            value={weather}
          />

          <button type="button" onClick={handleSubmit}>
            Search
          </button>

          <button type="button" onClick={getFavorite} >
            Favorite
          </button>
          
      </div>

        
        {apiData.main ? (
          <CityCard className="card"
           name = {apiData.name.toUpperCase()}
           image = {`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
           temp = {Math.floor(fToC(apiData.main.temp))}
           tempMax = {Math.floor(fToC(apiData.main.temp_max))}
           tempMin = {Math.floor(fToC(apiData.main.temp_min))}
           description = {apiData.weather[0].description}
           humidity = {apiData.main.humidity}
           day = {moment().format('LL')}

          />
            
        ) : (
          <h4> Loading... </h4>
        ) }
      </div>

      <Footer />
    </div>
  );
}
