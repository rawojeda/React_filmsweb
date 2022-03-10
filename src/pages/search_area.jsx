import { MoviesGrid } from "../components/MoviesGrid";
import React, { useEffect, useState } from "react";
import { UseQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/Spinner";
import { No_results } from "../components/No_results";

export function FilmSearcher() {
  const [films, setfilms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [primeraVez, setPrimeraVez] = useState(true);

  const query = UseQuery();
  const search = query.get("search");

  
  useEffect(() => {
    //caso nueva búsqueda
    if(!primeraVez && page===1 ){
      // caso busqueda avengers, titanic(ya que al no funcionar setpage no iría a useefect page)
      const searchURL ="https://api.themoviedb.org/3/search/movie?query=" + search +"&page=" + page;
      get(searchURL).then((data) => {
        setfilms(data.results);
        setHasMore(data.page < data.total_pages);
      })
    }
      //caso avengers, avengers_page_2, titanic 
      setPage(1); 
  }, [search]);

  useEffect(() => {
    const searchURL ="https://api.themoviedb.org/3/search/movie?query=" + search +"&page=" + page;
    get(searchURL).then((data) => {
        if(page===1 ){
          setfilms(data.results);
          setPrimeraVez(false);
        }else{
          setfilms((prevFilms) =>
          prevFilms.concat(data.results)
        );
      }
      setHasMore(data.page < data.total_pages);
    });
  }, [page]);


  if(films.length===0 ){
    return <No_results/>;
  }

  return (
    <InfiniteScroll
      dataLength={films.length}
      hasMore={hasMore}
      next={() => {
        setTimeout(function () {
          setPage((prevPage) => prevPage + 1);
        }, 1000);
      }}
      loader={<Spinner />}
    >
      <div>
        <MoviesGrid films={films} page="Buscador"/>
      </div>
    </InfiniteScroll>
  );
}
