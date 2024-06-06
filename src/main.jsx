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
import UpdateUser from './components/UpdateUser.jsx';
import EstateDetails from './components/EstateDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import MemberAccess from './components/MemberAccess.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<PrivateRoute><Home></Home></PrivateRoute>,
        loader:async() => fetch('../estate_data.json').then(res=>res.json()).then(data=> data.estate_cards),
      },
      
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'update-user',
        element:<PrivateRoute><UpdateUser></UpdateUser></PrivateRoute>
      },
      {
        path:'/estate-details/:id',
        element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
       loader:async() => fetch('../estate_data.json').then(res=>res.json()).then(data=> data.estate_cards),
    
      },
      {
        path:'/member-access',
        element:<PrivateRoute><MemberAccess></MemberAccess></PrivateRoute>
      }
        
    ],
    
  },
  {
    path:'/estate-details/:id',
    element:<EstateDetails></EstateDetails>,
    loader:async() => fetch('../estate_data.json').then(res=>res.json()).then(data=> data.estate_cards),

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router}/>
      </AuthProvider>        
  </React.StrictMode>,
)
