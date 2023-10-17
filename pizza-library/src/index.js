import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PizzaForm from './PizzaForm';
import PizzaContainer from './PizzaContainer';
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/pizzaContainer",
        element:<PizzaContainer />,
      },
    ]
  },
  {
    path: "/newpizza",
    element: <PizzaForm />,
  },
  
]
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
