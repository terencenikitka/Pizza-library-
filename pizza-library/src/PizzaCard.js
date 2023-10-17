import React from "react";

function PizzaCard ({el}) {
    const{name,img,ingredient}=el
    const renderedIngredient =  ingredient.map((el)=><li>{el}</li>)
    return (
        <li className="cards__item">
            <div className="card">
            <h4 className="pizzaname">{name}</h4>
            <img
          src={img}
          alt={name}
          className="card__image"
        />
    <div>
      <h4 className="ingredientsname">Ingredients:</h4>
      <ul className="ingredientslist">{renderedIngredient}</ul>
    </div>
 </div>
 </li>   )
}

export default PizzaCard;