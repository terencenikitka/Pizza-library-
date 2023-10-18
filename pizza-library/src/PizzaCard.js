import React, {useState}from "react";

function PizzaCard ({el}) {
    const{name,img,ingredient,id}=el
    const renderedIngredient =  ingredient.map((el)=><li>{el}</li>)

    const [details,setDetails] = useState(false)
    const [fav,setFav] = useState(false)

    function handleClick(){
      setDetails((cur)=>!cur)
    }
    function handleFav(){
      setFav((cur)=>!cur)
      
    }
    
    return (
        <li className="cards__item">
            <div className="card">
            <h4 className="pizzaname">{name}</h4>
         
            <img
          src={img}
          alt={name}
          className="card__image"
          onClick={handleClick}
        />   
        <div>
     <button onClick={handleFav}>{fav?"🟊":'☆'}</button>
     </div>
    <div>
      <h4 className="ingredientsname">Ingredients:</h4>
      <ul className="ingredientslist">{ details?renderedIngredient:''}</ul>
    </div> 
      
 </div>
 </li>   )
}

export default PizzaCard;