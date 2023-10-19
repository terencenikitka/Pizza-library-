import React, {useState} from "react";

import { useOutletContext, NavLink} from "react-router-dom";


function PizzaForm () { 
    
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [ingredient, setIngredient] = useState("")
    

    const {handleNewPizza} = useOutletContext()

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleImgChange(event){
        setImg(event.target.value)
    }

    function handleIngredientChange(event){
        setIngredient(event.target.value)
    }
  
    function handleOnSubmit(event){
        event.preventDefault();
        const onePizza = {
            name: name,
            img: img,
            fav:false,
            ingredient: ingredient
            
            
            .split(',')
            .map(str => str.trim())
        }

        fetch("http://localhost:3001/pizzas", 
        {
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify(onePizza)
        }
        )
        .then(response => response.json())
        // .then(handleNewPizza(onePizza))
        .then((data) => {
            // handleNewPizza(data)
            setName("")
            setImg("")
            setIngredient("")
        })
    }


    return(
        <>
        <div className="pizzaform">
        <form onSubmit={handleOnSubmit}>
                <h2 className="formname">Add a new pizza</h2> 
                    <input type="text" name="name" placeholder="e.g Hawaiian" value={name} onChange={handleNameChange}></input>
                    <input type="url" name="img" placeholder="Enter a URL" onChange={handleImgChange} value={img}></input>
                    <input type="text" name="indgredients" placeholder="List ingredients separated by a comma" onChange={handleIngredientChange} value={ingredient}></input>
                    <button type="submit" name="submit">Submit</button>
            </form>
        </div>
        <div className="backtohome">
        <nav className="nav">
                <NavLink to="/" className="nav-link">Back to Home</NavLink>
            </nav>
        </div>
        </>
    )

}

export default PizzaForm;