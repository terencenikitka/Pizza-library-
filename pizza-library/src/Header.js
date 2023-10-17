import React from "react";
import SearchBar from "./SearchBar";

import { NavLink } from "react-router-dom";

function Header ({setSearchStr,handleSort}) {
    return (
    <>
       <SearchBar setSearchStr={setSearchStr} handleSort={handleSort}/>
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/newPizza" className="nav-link">New Pizza</NavLink>
        </nav>
    </>

    )
}

export default Header;