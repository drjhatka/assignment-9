import React, { useContext, useEffect } from 'react'
import { AuthContext } from './components/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    if (loading) {
        return <><span className="loading loading-bars loading-lg"></span></>
            
    }
    if (user) {
        return children
    }  
    navigate('/login')  

}

export default PrivateRoute
