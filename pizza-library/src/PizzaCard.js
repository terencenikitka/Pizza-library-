import React, {useState}from "react";

function PizzaCard ({el}) {
    const{name,img,ingredient,id}=el
    const renderedIngredient =  ingredient.map((el)=><li>{el}</li>)

    const [details,setDetails] = useState(false)

    function handleClick(){
      setDetails((cur)=>!cur)
    }
    
    return (
        <li className="cards__item">
            <div className="card">
            <img
          src={img}
          alt={name}
          className="card__image"
          onClick={handleClick}
        />
    <h4>{name}</h4>
    <div><ul>{ details?renderedIngredient:''}</ul></div>
   
 </div>
 </li>   )
}

export default PizzaCard;