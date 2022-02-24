import React, { useContext } from "react";
import moment from "moment";

// components
import Footer from "../components/Footer";
import CityCard from "../components/CityCard";

// Favorites Context
import { favContext } from "../App";

// CSS
import "../App.css";
import styled from "styled-components";

export default function Favorites() {
  // Add a favorite city CONTEXT
  const favCity = useContext(favContext);
  // console.log("City", favCity.stockedCity[0]);

  // Remove a favorite city
  // const removeCity = (name) => {
  //   const i = favCity.stockedCity.indexOf(name);
  //   if (i > - 1) {
  //     favCity.stockedCity.spilce(i, 1);
  //   }
  // };

  // Change from F degree to C degree
  const fToC = (f) => {
    return (f - 273.15).toFixed(2);
  };

  return (
    <div>
        <FavoriteCityCard>
          <h1> My favorite cities</h1>

          {favCity.stockedCity.map((city) => {
            return (
              <ul>
               
                  <CityCard className="card-favorite"
                    name={city.name.toUpperCase()}
                    image={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                    temp={Math.floor(fToC(city.main.temp))}
                    tempMax={Math.floor(fToC(city.main.temp_max))}
                    tempMin={Math.floor(fToC(city.main.temp_min))}
                    description={city.weather.description}
                    humidity={city.main.humidity}
                    day={moment().format("LL")}
                  />

                  {/* <button type="button" onClick={() => removeCity(city)}> Delete </button> */}
                
                
              </ul>
            );
          })}
        </FavoriteCityCard>
        <Footer />
    </div>
    
  );
}

const FavoriteCityCard = styled.ul`
  h1, ul {
    text-align: center;
  }
`
