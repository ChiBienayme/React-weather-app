//react
import React, {createContext, useContext, useState} from 'react';

//  React router dom
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// CSS
import "./App.css";

export const favContext = createContext({
  stockedCity: [],
});

export default function App() {

  const [stockedCity, setstockedCity] = useState([]);

  const value = {
    stockedCity: stockedCity,
    setstockedCity: setstockedCity,
  }

    return (
     
        <favContext.Provider value={value}>
          <BrowserRouter>
            <nav className='nav '>
                <Link className="text-link" to="/" > Home  </Link>
                <Link className="text-link" to="/favorites"> Favorites  </Link>  
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorites" component={Favorites} /> 
            </Switch>

          </BrowserRouter>
        </favContext.Provider>
     
      
    )
}


