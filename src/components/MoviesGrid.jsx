import { get } from "../utils/httpClient";
import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import estilo from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";


export function MoviesGrid() {
  const filmState = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  
  // const films = filmState[0];
  // const setfilms = filmState[1];
  const [films, setfilms] = filmState;

  const query = useQuery();
  const search = query.get("search");
  console.log(search)

  useEffect(() => {
    setIsLoading(true);
    const searchURL= search ? 
    "https://api.themoviedb.org/3/search/movie?query="+search:
    "https://api.themoviedb.org/3/discover/movie";
    get(searchURL)
      .then((data) => {
        setfilms(data.results);
        setIsLoading(false);
      });
  }, [setfilms,search]);
  if(isLoading){
    return <Spinner/>;
  }
// con el corchete abierto y cerrado de arriba esto solo se ejecuta una vez 
  return (
    <ul className={estilo.moviesGrid}>
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </ul>
  );
}
