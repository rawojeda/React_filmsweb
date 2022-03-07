import { useParams } from "react-router-dom";
import estilo from "./film_details.module.css";
import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";

export function Filmdetails(){
    
    const { filmId }= useParams();

    const [film, setFilm] = useState(null);
    useEffect(() => {
        get("https://api.themoviedb.org/3/movie/" + filmId)
        .then(data =>{
            setFilm(data);
        })
    },[filmId]);
    if(!film){
        return null;
    }
    const imageUrl = "https://image.tmdb.org/t/p/w400" + film.poster_path;
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