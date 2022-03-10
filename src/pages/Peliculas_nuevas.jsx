import { MoviesGrid } from "../components/MoviesGrid";
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/Spinner";

export function Peliculasnuevas() {
  const [films, setfilms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);


  useEffect(() => {
    const searchURL ="https://api.themoviedb.org/3/discover/movie?page=" + page;
    get(searchURL).then((data) => {
      setfilms((prevFilms) =>
        prevFilms.concat(data.results)
      );
      setHasMore(data.page < data.total_pages);
    });
  }, [page]);

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
        <MoviesGrid films={films} page="Novedades"/>
      </div>
    </InfiniteScroll>
  );
}
