import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
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
       
    const profileUpdate = (displayName,photoUrl)=>{
        
        return updateProfile(auth.currentUser,{
            displayName:displayName, photoURL:photoUrl
        })
    }
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                console.log(currentUser)
                setLoading(false)
            })
        
        return ()=>{unsubsribe()}
    },[user])
    const authInfo ={
        user,
        loading,
        createUser,
        setUser,
        userLogIn,
        logOut,
        profileUpdate,
    }
    return (
       <AuthContext.Provider value ={authInfo} >
            {children}
       </AuthContext.Provider> 
    )
}


export default AuthProvider
