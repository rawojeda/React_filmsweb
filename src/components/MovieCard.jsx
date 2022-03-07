import React from 'react';
import {
  Link
} from "react-router-dom";

import estilo from "./MovieCard.module.css";
export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className={estilo.movieCard}>
        <Link to={"/films/" +movie.id}>
        <img className={estilo.movieImage} src={imageUrl} width={230} height={345} alt={movie.title}/>
        <div>{movie.title}</div>
        </Link>
      </li>
    );
}
