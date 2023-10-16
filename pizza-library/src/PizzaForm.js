import React, {useState} from "react";

function PizzaForm () {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngredients] = useState("")

    function handleNameChange(event){
        setName(event.target.value)
        // console.log(name)
    }

    function handleImageChange(event){
        setImage(event.target.value)
        // console.log(image)
    }

    function handleIngredientsChange(event){
        setIngredients(event.target.value)
        // console.log(ingredients)
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const onePizza = {
            name: name,
            image: image,
            ingredients: ingredients,
        }
        fetch("http://localhost:3001/pizzas", {
            method: "POST",
            headers: {
                "Content-type": "application.JSON"
            },
            body: JSON.stringify(onePizza)
        })
        .then(response => response.json())
        .then(console.log(onePizza))
    }



    return(
        <>
            <form> Add a new Pizza  
                <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g Hawaiian" onChange={handleNameChange}></input>
                <label for="image">Image URL</label>
                    <input type="url" id="image" name="image" placeholder="enter a URL" onChange={handleImageChange}></input>
                <label for="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="indgredients" placeholder="list ingredients separated by a comma" onChange={handleIngredientsChange}></input>
                <label for="submit"></label>
                    <input type="submit" id="submit" name="submit" onClick={handleOnSubmit}></input>
            </form>
        </>
    )

}

export default PizzaForm;