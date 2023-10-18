import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PizzaForm from './PizzaForm';
import PizzaContainer from './PizzaContainer';
import SearchBar from './SearchBar';
import WelcomePage from './WelcomePage';
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element: <WelcomePage/>},
      {
    path:"/pizzaContainer",
    element:[<SearchBar/>,<PizzaContainer />]
  },
  {
    path: "/newpizza",
    element: <PizzaForm />,
    
  },
              ]
  },

]
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
