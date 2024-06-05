import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<PrivateRoute><Home></Home></PrivateRoute>,
        // loader:()=>{
        //     return fetch('estate_data.json').then(res=>res.json().then(data=>console.log(data)))
          
        // },
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router}/>
      </AuthProvider>        
  </React.StrictMode>,
)
