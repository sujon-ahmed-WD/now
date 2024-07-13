import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
 
   
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRute from './Laout/MainRute';
import Home from './Pages/Home';
import ErrorPage from './Component/ErrorPage';
import Update from './Pages/Update';
 import Resouce from './Pages/Resouce';
import Logine from './Pages/Logine';
import Ragister from './Pages/Ragister';
import AuthProvider from './Provider/AuthProvider';
import Expolor from './Pages/Expolor';
import PrivateRoute from './Private/PrivateRoute';
import Contact from './Pages/Contact';
 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainRute/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('/Data.json')
      },
      // Private ROute ::
      {
        path:'/Data/:id',
        element:<PrivateRoute><Expolor/></PrivateRoute>,
         loader:()=>fetch(`/Data.json`)
         

      },
 
      {
        path:'/update',
        element:<PrivateRoute><Update/></PrivateRoute>,
        
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact/></PrivateRoute>
      },
      {
        path:"/resorce",
        element:<Resouce/>
      },
      {
        path:'/login',
        element:<Logine/>
      },
      {
        path:'/ragister',
        element:<Ragister/>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
        </AuthProvider>
  </React.StrictMode>,
)
