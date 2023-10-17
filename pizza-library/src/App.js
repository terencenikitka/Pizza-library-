import './App.css';
import Header from './Header';
import PizzaContainer from './PizzaContainer';
import PizzaForm from './PizzaForm';
import React,{useState,useEffect} from 'react';

function App() {
  const [pizzaObj,setPizza] = useState([])
  const[searchStr,setSearchStr] = useState('')



  function onNewPizza(arr){
 
    const newArr =  arr.filter((el)=>{
      const strToLower = searchStr.toLowerCase()
      const nameToLower = el.name.toLowerCase()
      const ingredientToLower = el.ingredient.map((el)=>{
        return el.toLowerCase()})
      return nameToLower.includes(strToLower)||ingredientToLower.toString().includes(strToLower)
    })
    return newArr
    
    }

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzasArr) => {
        setPizza(pizzasArr)
      });
  }, []);



  return (


    <>
        <Header setSearchStr={setSearchStr}/>
        <PizzaForm />
        <PizzaContainer pizzaObj={pizzaObj} onNewPizza={onNewPizza}/>
    </>
  );
}

export default App;
