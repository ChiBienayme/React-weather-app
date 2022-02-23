import React, { useState, useEffect } from 'react';
import '../App.css';
import Footer from "./Footer"
// import AddButton from "./AddButton"
// import DeleteButton from "./DeleteButton"

//CSS
import '../App.css';


export default function Search () {
 
  // City
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState('paris');
  const [getCity, setGetCity] = useState('paris');
  // const [fav, setFav] = React.useState(false);
  

  // Side effect
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch("Error")
  },[`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b116f6119f2ece693e78008220c9527`]);

  //function handle input/Enter location
  const handleInput = (e) => {
    setGetCity(e.target.value);
  };

  //function handle Submit/SEARCH
  const handleSubmit = () => {
    setCity(getCity);
  };
  
  // Change from F degree to C degree
  const fToC = (f) => {
    return (f - 273.15).toFixed(2);
  };

  // Add more 3 favorite cities
  // const handleFav = () => {
  //   setFav(!fav)
  //   if(fav === true){
  //     //save it to firestore
  //     AddButton("favorites",apiData.name)
  //     //save name to localstorage? but this will fail if they come back
    
  //   }else{
  //     console.log('delete me?')
  //     console.log(apiData.name)
  //     DeleteButton("delete",apiData.name)

  //     //delete it where 
  //   }
  // }

  

  return (

      <div className="App">
      
        <h2> React Weather App </h2>
     
        <div className="container">
          <div>
            <label for="location-name">
              Enter location :
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

            {/* <button type="button" onClick={handleFav}>
              Favorite
            </button> */}
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