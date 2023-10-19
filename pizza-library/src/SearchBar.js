import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { useOutletContext } from "react-router-dom";


function SearchBar() {

  const {setSearchStr,handleSort} = useOutletContext()

    function handleSearch(e){
        setSearchStr(e.target.value)
      }
 
  return (
    <div className="search">
      <AiOutlineSearch className="searchIcon" /><input type="text" className="searchTerm" onChange={handleSearch}/>
        <label><input type="checkbox" onClick={handleSort} />Sort</label>
    </div>
  );
}

export default SearchBar;
