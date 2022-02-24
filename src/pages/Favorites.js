import React, { useContext } from "react";

// components
import Footer from "../components/Footer";
import CityCard from "../components/CityCard";
import Home from "./Home"

// Favorites Context
import { favContext } from "../App";

// CSS
import "../App.css"

export default function Favorites() {
  // Add a favorite city
  const favCity = useContext(favContext);

  // Remove a favorite city
  const removeCity = (name) => {
    const i = favCity.stockedCity.indexOf(name);
    if (i > - 1) {
      favCity.stockedCity.spilce(i, 1);
    }
  };

  return (
    <Favorites.Provider value={favCity}>
      <>
        <h1>Favorites</h1>
        {this.props.children}
        {favCity.stockedCity.map((city) => {
          return (
            <ul>
              <li>
                <CityCard name={city[0].name} 
                          temp={city[0].main.temp} />

                <button type="button" onClick={() => removeCity(city)}> Delete</button>
              </li>
            </ul>
          );
        })}
      </>

      <Footer />
    </Favorites.Provider>
  );
}


