import estilo from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={estilo.movieCard}>
      <img className={estilo.movieImage} src={imageUrl} width={230} height={345} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
}
