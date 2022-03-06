import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import estilo from "./MoviesGrid.module.css";

export function MoviesGrid() {
    console.log(movies);
  return (
    <ul className={estilo.moviesGrid}>
        {movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
