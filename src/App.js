import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


//pages
import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";


// CSS
import "./App.css"


//API Key: 28a779be6bda3a19370d2b506ae1439e
export default function App() {

    return (
      <BrowserRouter>
          <nav className='nav '>
              <Link className="text-link" to="/" > Accueil  </Link>
              <Link className="text-link" to="/favoris"> Favoris  </Link>  
          </nav>

          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/favoris" component={Favoris} /> 
          </Switch>

        </BrowserRouter>
    )
}


