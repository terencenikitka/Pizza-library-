import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

function SearchBar({setSearchStr}) {
    function handleSearch(e){
        setSearchStr(e.target.value)
      }
 
  return (
    <div className="search">
      <AiOutlineSearch className="searchIcon" /><input type="text" className="searchTerm" onChange={handleSearch}/>
        <label><input type="checkbox" />Sort</label>
    </div>
  );
}

export default SearchBar;
