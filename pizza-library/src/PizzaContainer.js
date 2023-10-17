import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaContainer ({pizzaObj,onNewPizza}) {

const renderedPizza = onNewPizza(pizzaObj).map((el)=>{return (<PizzaCard  key={el.id} el={el} />)})
    return (
        <ul className="cards">
            <p>Hello from the Pizza Container</p>
            {renderedPizza}
        </ul>
    )
}

export default PizzaContainer;