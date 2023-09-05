import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import First from './component/First/First.jsx';
import Service from './component/Service/Service.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:<First></First>
      },
      {
        path: "about",
        element:<About></About>
      },
      {
        path: "service",
        element:<Service></Service>
      },
      
      {
        path: "contact",
        element:<Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
