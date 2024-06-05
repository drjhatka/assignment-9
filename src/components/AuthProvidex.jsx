import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../firebase'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const createUser = (email, password,name='Not Set', photoUrl='Not Set')=>{
        //return promise
        return createUserWithEmailAndPassword(auth, email,password);
        
    }
    const userLogIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loggedout = (auth)=>{
        useEffect(()=>{
            signOut(auth).then(()=>{
                //setUser(null)
             }).catch(error,()=>{
                console.log(error)
                
             });
        },[])
       
    }
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
            })
        
        return ()=>{unsubsribe()}
    },[])
    const authInfo ={
        user,
        createUser,
        setUser,
        userLogIn,
        loggedout,

    }
    return (
       <AuthContext.Provider value ={authInfo} >
            {children}
       </AuthContext.Provider> 
    )
}


export default AuthProvider
