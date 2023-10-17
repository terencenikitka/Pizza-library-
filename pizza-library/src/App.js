import './App.css';
import Header from './Header';
import PizzaContainer from './PizzaContainer';
import PizzaForm from './PizzaForm';
import React,{useState,useEffect} from 'react';

function App() {
  const [pizzaObj,setPizza] = useState([])
  const[searchStr,setSearchStr] = useState('')
  const [sort,setSort] = useState(false)



  function onNewPizza(arr){
 
    const newArr =  arr.filter((el)=>{
      const strToLower = searchStr.toLowerCase()
      const nameToLower = el.name.toLowerCase()
      const ingredientToLower = el.ingredient.map((el)=>{
        return el.toLowerCase()})
      return nameToLower.includes(strToLower)||ingredientToLower.toString().includes(strToLower)
    })
    if (!sort){
      return newArr}
else {
 return newArr.sort((a,b)=>{ 
  if (b.name>a.name){return -1 }
else if(a.name>b.name){return 1}
else return 0})}
    }

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzasArr) => {
        setPizza(pizzasArr)
      });
  }, []);

  function handleSort(){
    setSort((curent)=>!curent)
  }

  function handleNewPizza(onePizza){
    setPizza([onePizza, ...pizzaObj])
  }

  return (


    <>

        <Header setSearchStr={setSearchStr} handleSort={handleSort}/>
        <PizzaContainer pizzaObj={pizzaObj} onNewPizza={onNewPizza}/>

        <PizzaForm handleNewPizza={handleNewPizza}/>
    

    </>
  );
}

export default App;
