import React from "react";
import PizzaCard from "./PizzaCard";
import { useOutletContext } from "react-router-dom";

function PizzaContainer () {
    const {pizzaObj,onNewPizza} = useOutletContext()

    const renderedPizza = onNewPizza(pizzaObj).map((el)=>{return (<PizzaCard  key={el.id} el={el} />)})
        return   (
            <div className="pizzacontainer">
                <ul className="cards">{renderedPizza}</ul>
            </div>
          )
}

export default PizzaContainer;