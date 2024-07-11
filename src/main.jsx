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
import Expolor from './Pages/Expolor';
import Resouce from './Pages/Resouce';
import Logine from './Pages/Logine';
import Ragister from './Pages/Ragister';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainRute/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/update',
        element:<Update/>,

      },
      // Private ROute ::
      {
        path:"/explor",
        element:<Expolor/>
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
        </AuthProvider>
  </React.StrictMode>,
)
