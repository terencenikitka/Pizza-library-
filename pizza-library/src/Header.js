import React from "react";
import SearchBar from "./SearchBar";
function Header ({setSearchStr}) {
    return (
    <SearchBar setSearchStr={setSearchStr}/>
    )
}

export default Header;