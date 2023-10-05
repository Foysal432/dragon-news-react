import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../Firebase/Firebase-config";

const auth =getAuth(app)

export const AuthContext =createContext(null)
const AuthProvaider = ({children}) => {
   const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
// on auth change
useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
        console.log('user in the auth change',currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return () =>{
        unSubscribe();
    }
},[])

// sing in
const singin =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

// log out

const logout = ()=>{
    setLoading(true)
    return signOut(auth)
}

//    create a user
const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}



    const AuthInfo ={
         user,
         createUser,
         logout,
         singin,
         loading

    }
    return (

        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvaider;