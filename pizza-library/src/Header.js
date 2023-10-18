import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import {IoPizzaOutline} from "react-icons/io5";

function Header ({setSearchStr,handleSort}) {
    return (
        <>
            <div className="banner">
                <h1 className="pizzaheader" >Pizza Library<IoPizzaOutline/></h1>
            </div>
            <nav className="nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/newPizza" className="nav-link">New Pizza</NavLink>
                <NavLink to="/pizzaContainer" className="nav-link">Pizzas</NavLink>
            </nav>
            <SearchBar setSearchStr={setSearchStr} handleSort={handleSort}/>        
      </>
    )
}

export default Header;