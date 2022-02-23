import React, { useState, useEffect } from 'react';
import '../App.css';
import Footer from "./Footer"

//CSS
import '../App.css';


export default function Search () {
  //URL
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=28a779be6bda3a19370d2b506ae1439e`;

  // City
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState('paris');
  const [getCity, setGetCity] = useState('paris');

  // Side effect
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch("Error")
  },[`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`]);

  //functions handle input

  const handleInput = (e) => {
    setGetCity(e.target.value);
  };
  
  const handleSubmit = () => {
    setCity(getCity);
  };
  
  // Change from F degree to C degree
  const fToC = (f) => {
    return (f - 273.15).toFixed(2);
  };

  return (

      <div className="App">
      
        <h2> React Weather App </h2>
     
        <div className="container">
          <div>
            <label for="location-name">
              Enter Location :
            </label>
            
            <input
              type="text"
              id="location-name"
              onChange={handleInput}
              value={getCity}
            />
            
            <button type="button" onClick={handleSubmit}>
              Search
            </button>

            <button type="button" onClick={handleSubmit}>
              Favorite
            </button>
        </div>

        <div style={{ width: '60vw' }}>
          {apiData.main ? (
            <div>
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h5">
                <strong> {apiData.name}</strong>
              </p>

              <p className="h2">
                {fToC(apiData.main.temp)}&deg; C
              </p>
              {/* <p className="h2">
                Today is {apiData.daily.dt}
              </p> */}

              </div>
          ) : (
            <h4>Loading...</h4>
          )}
          
        </div>
        
      </div>
      <div></div>
      <div></div>
      <div></div>
      <Footer/>
      
    </div>
  )
  
}