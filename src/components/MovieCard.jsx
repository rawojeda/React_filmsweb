import React from 'react';
import {
  Link
} from "react-router-dom";

import estilo from "./MovieCard.module.css";

export function MovieCard({ film }) {
    const imageUrl = "https://image.tmdb.org/t/p/w400" + film.poster_path;
    return (
      <li className={estilo.movieCard}>
        <Link to={"/films/" +film.id}>
        <img className={estilo.movieImage} src={imageUrl} width={230} height={345} alt={film.title}/>
        <div className={estilo.titles}>{film.title}</div>
        </Link>
      </li>
    );
}
