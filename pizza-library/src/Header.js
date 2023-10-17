import React from "react";
import SearchBar from "./SearchBar";
function Header ({setSearchStr,handleSort}) {
    return (
    <SearchBar setSearchStr={setSearchStr} handleSort={handleSort}/>
    )
}

export default Header;