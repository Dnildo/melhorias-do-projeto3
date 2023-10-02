import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  "/my-app/src/global.scss"
import Home from "/my-app/src/views/Home/Home.jsx";
import Edit from "/my-app/src/views/Edit/Edit.jsx";
import Delete from "/my-app/src/views/Delet/Delete.jsx";
import Lapis from "/my-app/public/lapis.png"

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
    path: "/Delete",
    element: <Delete />,
  },
  {
    path: "/Lapis",
    element: <Lapis/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);