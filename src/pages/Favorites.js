import React, { useContext } from "react";

// components
import Footer from "../components/Footer";
import CityCard from "../components/CityCard";

// Favorites Context
import { favContext } from "../App";

// CSS
import "../App.css"

export default function Favorites() {
  // Add a favorite city
  const favCity = useContext(favContext);
  console.log("City", favCity.stockedCity[0])

  // Remove a favorite city
  const removeCity = (name) => {
    const i = favCity.stockedCity.indexOf(name);
    if (i > - 1) {
      favCity.stockedCity.spilce(i, 1);
    }
  };

  // const handleRemoveItem = (e) => {
//    const name = e.target.getAttribute("name")
//    updateList(list.filter(item => item.name !== name));
//  };

  return (
    <div>
      <>
        <h1>Favorite Cities</h1>
        <button type="button" onClick={removeCity} style={{width: "20vw"}}> Delete </button>
       
       
         {favCity.stockedCity.map((city) => {
          return (
            <ul>
              <li>
                <CityCard key={city[0].description} 
                          name={city.name}
                          
                          temp={city.main.temp}
                        />

                <button type="button" onClick={() => removeCity(city)}> Delete </button>
              </li>
                
            </ul>  
              
          )
        })}
      </>

      <Footer />
    </div>
  );
}


