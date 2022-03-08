import style from "./search.module.css";
import {FaSearch} from "react-icons/fa"
import { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Searchercomp() {
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search||"");
  }, [search]);


  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault();
    history.push("/?search="+searchText);
  }
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput} type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}/>
        <button className={style.searchButton} type="submit"><FaSearch/></button>
      </div>
    </form>
  );
}
