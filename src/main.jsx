import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/layout';
import Home from './Components/Home';
import Register from './Components/Register';
import RegisterHero from './Components/RegisterHero';
import Login from './Components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/registerHero',
        element: <RegisterHero></RegisterHero>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
