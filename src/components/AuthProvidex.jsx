import { getAuth } from 'firebase/auth'
import { createContext, useContext } from 'react'
import { app } from '../firebase'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const {test}=useContext(AuthContext)
    const auth = getAuth(app)
    return (
       <AuthContext.Provider value ='asdasd' >
            {children}
       </AuthContext.Provider> 
    )
}


export default AuthProvider
