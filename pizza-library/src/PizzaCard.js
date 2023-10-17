import React from "react";

function PizzaCard ({el}) {
    const{name,img,ingredient}=el
    const renderedIngredient =  ingredient.map((el)=><li>{el}</li>)
    return (
        <li className="cards__item">
            <div className="card">
            <img
          src={img}
          alt={name}
          className="card__image"
        />
    <h4>{name}</h4>
    <div> ingredients:<ul>{ renderedIngredient}</ul></div>
   
 </div>
 </li>   )
}

export default PizzaCard;