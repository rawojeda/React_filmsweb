import React from "react";
import { MovieCard } from "./MovieCard";
import estilo from "./css/MoviesGrid.module.css";

export function MoviesGrid({ films, page }) {
  return (
    <div>
      <h1 className={estilo.titulo}>{page}</h1>
      <ul className={estilo.moviesGrid}>
        {films
          .sort((film) => film.popularity)
          .map((film) => (
            // con esto nos olvidamos de que se envíen películas sin foto
            <MovieCard key={film.id} film={film} />
          ))}
      </ul>
    </div>
  );
}
