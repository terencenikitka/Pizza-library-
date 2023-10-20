import React from "react";
import PizzaCard from "./PizzaCard";
import { useOutletContext } from "react-router-dom";

function FavPizza(){
    const {pizzaObj,onNewPizza,onupdatedPizza} = useOutletContext()
    
    const filteredPizza =onNewPizza(pizzaObj).filter((el)=>{return el.fav})
    const renderedPizza = filteredPizza.map((el)=>{
        return (<PizzaCard  onupdatedPizza={onupdatedPizza} key={el.id} el={el} />)})
        return   (
            <div className="pizzacontainer">
                <ul className="cards">{renderedPizza}</ul>
            </div>
          )
    return( <PizzaCard/>)
}

export default FavPizza