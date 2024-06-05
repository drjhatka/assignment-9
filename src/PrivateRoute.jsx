import React, { useContext } from 'react'
import { AuthContext } from './components/AuthProvidex'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
   const user = useContext(AuthContext)
   if(user){
    return children;
   }
   return <Navigate to="/login" replace={true} />
}

export default PrivateRoute
