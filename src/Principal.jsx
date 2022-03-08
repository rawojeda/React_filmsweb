import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MoviesGrid } from "./components/MoviesGrid";
import estilo from "./Principal.module.css";
import { Filmdetails } from "./pages/film_details";
import {Searchercomp} from "./components/search";

export function App() {
  return (
    <Router>
      <div className={estilo.contenedor}>
        <div className={estilo.cabecera}>
          <nav className={estilo.navbar}>
            <ul className={estilo.nav_components}>
              <li className={estilo.nav_component}>
                <Link to="/"><h4 className="texto">FILMS</h4></Link>
              </li>
              <li className={estilo.nav_component}>
                <Link to="/about"><h4>OTROENLACE</h4></Link>
              </li>
              <li className={estilo.nav_component}>
                <Searchercomp/>
              </li>
            </ul>
          </nav>
        </div>

        <div className={estilo.contenido}>
          <Switch>
            <Route exact path="/films/:filmId">
              <Filmdetails />
            </Route>
            <Route exact path="/">
              <MoviesGrid />
            </Route>
            <Route path="/">404</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
