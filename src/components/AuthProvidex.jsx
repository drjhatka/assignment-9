import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { createContext, useContext, useState } from 'react'
import { app } from '../firebase'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const createUser = (email, password,name='Not Set', photoUrl='Not Set')=>{
        //return promise
        return createUserWithEmailAndPassword(auth, email,password);
    }
    
    const authInfo ={
        user,
        createUser,
        setUser

    }
    return (
       <AuthContext.Provider value ={authInfo} >
            {children}
       </AuthContext.Provider> 
    )
}


export default AuthProvider
