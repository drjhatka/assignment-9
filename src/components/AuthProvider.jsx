import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser]           = useState(null);
    const [loading, setLoading]     = useState(true)
    
    const auth = getAuth(app);

    const createUser = (email, password,name='Not Set', photoUrl='Not Set')=>{
        //return promise
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
        
    }
    const userLogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
            signOut(auth).then(()=>{
                //redirect to login page
            setLoading(true)
             }).catch((error)=>{
                toast(error)  
             });
        }
       
    
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false)
            })
        
        return ()=>{unsubsribe()}
    },[])
    const authInfo ={
        user,
        createUser,
        setUser,
        userLogIn,
        logOut,
        loading
    }
    return (
       <AuthContext.Provider value ={authInfo} >
            {children}
       </AuthContext.Provider> 
    )
}


export default AuthProvider
