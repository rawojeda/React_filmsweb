import { get } from "../utils/httpClient";
import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import estilo from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const filmState = useState([]);
  
  // const films = filmState[0];
  // const setfilms = filmState[1];
  const [films, setfilms] = filmState;

  useEffect(() => {get("https://api.themoviedb.org/3/discover/movie")
      .then((data) => {
        setfilms(data.results);
      });
  }, []);
// con el corchete abierto y cerrado de arriba esto solo se ejecuta una vez 
  return (
    <ul className={estilo.moviesGrid}>
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </ul>
  );
}
