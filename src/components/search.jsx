import style from "./css/search.module.css";
import {FaSearch} from "react-icons/fa"
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { UseQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function Searchercomp() {
  const query = UseQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search||"");
  }, [search]);
  const [searchText, setSearchText] = useState("");

  const debouncedSearch = useDebounce(searchText,300);
  //con esto y el history cada vez que dejo de escribir en searchText se haría la acción.
  
  return (
    <div className={style.searchBox}>
    <input
      className={style.searchInput} type="text" 
      value={searchText} 
      onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
    <Link to={"/searcher/?search="+searchText} >
      <button className={style.searchButton} type="submit"><FaSearch/></button>
    </Link>
  </div>
  );
}
