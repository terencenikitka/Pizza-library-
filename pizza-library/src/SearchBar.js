import React from "react";

function SearchBar({setSearchStr}) {
    function handleSearch(e){
        setSearchStr(e.target.value)
      }
 
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange={handleSearch}/>
      <label><input type="checkbox" />Sort</label>
    </div>
  );
}

export default SearchBar;