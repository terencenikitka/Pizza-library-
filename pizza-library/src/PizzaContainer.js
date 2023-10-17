import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaContainer ({pizzaObj,onNewPizza}) {
  
const renderedPizza = onNewPizza(pizzaObj).map((el)=>{return (<PizzaCard key={el.id} el={el} />)})
    return (
        <div className="pizzacontainer">
            <ul className="cards">{renderedPizza}</ul>
        </div>

    )
}

export default PizzaContainer;