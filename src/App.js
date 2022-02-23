import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// 
//pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


// CSS
import "./App.css";



export default function App() {

    return (
      <BrowserRouter>
          <nav className='nav '>
              <Link className="text-link" to="/" > Home  </Link>
              <Link className="text-link" to="/favorites"> Favorites  </Link>  
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favoris" component={Favorites} /> 
          </Switch>

        </BrowserRouter>
    )
}


