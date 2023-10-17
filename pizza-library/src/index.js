import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PizzaForm from './PizzaForm';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newpizza",
    element: <PizzaForm />,
  }
]
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
