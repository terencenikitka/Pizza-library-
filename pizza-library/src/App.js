import './App.css';
import Header from './Header';
import PizzaContainer from './PizzaContainer';
import PizzaForm from './PizzaForm';
import React,{useState,useEffect} from 'react';

function App() {
  const [pizzaObj,setPizza] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzasArr) => {
        setPizza(pizzasArr)
      });
  }, []);

  function handleNewPizza(onePizza){
    setPizza([onePizza, ...pizzaObj])
  }
  return (


    <>
        <Header />
        <PizzaForm handleNewPizza={handleNewPizza}/>
        <PizzaContainer pizzaObj={pizzaObj}/>
    </>
  );
}

export default App;
