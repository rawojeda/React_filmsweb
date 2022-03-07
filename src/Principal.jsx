import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { MoviesGrid } from "./components/MoviesGrid";
import estilo from "./Principal.module.css";
import { Filmdetails } from './pages/film_details';

export function App(){
    return (
    <Router>
        <header>
            <Link to="/"><h1 className={estilo.title}>FILMS</h1></Link>
        </header>
        <main>
            <div>
                <Switch>
                    <Route exact path="/films/:filmId"><Filmdetails/></Route>
                    <Route exact path="/"><MoviesGrid/></Route>
                    <Route path="/">404</Route>
                </Switch>
            </div>
        </main>
    </Router>
    );
}