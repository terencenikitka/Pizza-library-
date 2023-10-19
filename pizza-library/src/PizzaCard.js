import React, {useState}from "react";

function PizzaCard ({el,handleFav}) {
    const{name,img,ingredient,id,fav}=el
    
    const renderedIngredient =  ingredient.map((el)=><li>{el}</li>)

    const [details,setDetails] = useState(false)
    const [favorite,setFav] = useState(false)
    const [del,setDelete] = useState(false)
    
   
    function handleClick(){
      setDetails((cur)=>!cur)
    }
    function handleFav(){
      setFav(()=>!fav)
     
      fetch("http://localhost:3001/pizzas/"+id, 
      {
          method: "PATCH",
          headers: {
              "Content-type": "application/JSON"
          },
          body: JSON.stringify({fav:!fav})
      }).then((r)=>r.json())
      return 
    }
function handleDelete(){
  setDelete((cur)=>!cur)
  fetch("http://localhost:3001/pizzas/"+id, 
  {
      method: "DELETE"

  })

}
    
   
    return (
        <li style={{display:del?"none":""}} className="cards__item">
            <div className="card">
            <h4 className="pizzaname">{name}</h4>
         
            <img
          src={img}
          alt={name}
          className="card__image"
          onClick={handleClick}
        />   

        <h1>
        <div>
        
     <button id="like button" onClick={handleFav}>{fav?"remove 🟊":'add to favorite☆'}</button>
    
     </div>
    </h1>
    <h1>
        <div>
        
     <button id="delete button" onClick={handleDelete}>Delete</button>
    
     </div>
    </h1>
    <div>
      <h4 className="ingredientsname">Ingredients:</h4>
      <ul className="ingredientslist">{ details?renderedIngredient:''}</ul>
    </div> 
      
 </div>
 </li>   )
}

export default PizzaCard;