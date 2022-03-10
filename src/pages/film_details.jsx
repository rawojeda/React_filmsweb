import { useParams } from "react-router-dom";
import estilo from "./css/film_details.module.css";
import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import placeholder from "../placeholder.png";

export function Filmdetails(){
    const { filmId }= useParams();
    const [isLoading,setIsLoading]=useState(true);
    const [film, setFilm] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        get("https://api.themoviedb.org/3/movie/" + filmId)
        .then(data =>{ 
            setIsLoading(false);
            setFilm(data);
        })
    },[filmId]);
    if(isLoading){
        return <Spinner />;
    }
    if(!film){return null;}

    const imageUrl = film.poster_path
    ? "https://image.tmdb.org/t/p/w400" + film.poster_path 
    : placeholder;

    return (
    <div className={estilo.detailsContainer}>
        <img className={estilo.col + " " +estilo.filmImage} src={imageUrl} alt={film.title}></img>
        <div className={`${estilo.col} ${estilo.filmDetails} `}>
            <p><strong>Title: {film.title}</strong></p>
            <p><strong>{film.genres.map(genre => genre.name).join(', ')}</strong></p>            
            <p>Descripcion: {film.overview}</p>

        </div>
    </div>
    );
}