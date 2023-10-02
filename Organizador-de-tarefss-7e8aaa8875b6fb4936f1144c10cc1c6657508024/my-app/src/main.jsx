import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./src/global.scss"
import Home from "./views/Home/Home.jsx";
import Edit from "./views/Edit/Edit";
import Delete from "./views/Delet/Delete.jsx";
import Lapis from "my-app/public/lapis.png"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Edit",
    element: <Edit />,
  },
  
  {
    path: "/Delet",
    element: <Delete />,
  },
  {
    path: "/Lapis",
    element: <Lapis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);