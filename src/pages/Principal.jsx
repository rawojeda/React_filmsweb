import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Peliculasnuevas } from "./Peliculas_nuevas";
import estilo from "./css/Principal.module.css";
import { Filmdetails } from "./film_details";
import { Searchercomp } from "../components/search";
import { FilmSearcher } from "./search_area";

export function App() {
  return (
    <Router>
      <div className={estilo.contenedor}>
        <div className={estilo.cabecera}>
          <nav className={estilo.navbar}>
            <ul className={estilo.nav_components}>
              <li className={estilo.nav_component}>
                <Link to="/">
                  <h4 className="texto">FILMS</h4>
                </Link>
              </li>
              <li className={estilo.nav_component}>
                <Searchercomp />
              </li>
            </ul>
          </nav>
        </div>
<<<<<<< HEAD
{/* comentario desde ejmplo_pelis */}


=======
>>>>>>> main
{/* comentario desde main */}
{/* otro comentario desde main */}
        <div className={estilo.contenido}>
          <Switch>
            <Route exact path="/">
              <Peliculasnuevas />
            </Route>
            <Route exact path="/searcher/">
              <FilmSearcher />
            </Route>
            <Route exact path="/films/:filmId">
              <Filmdetails />
            </Route>
            <Route path="/">404</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
