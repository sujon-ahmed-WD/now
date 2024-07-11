import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext,useEffect, useState } from "react";
import auth from "../Fierbase/Fierbase.config.init";

 

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    //  User Data 
    const [user,setuser]=useState(null)

    // Create Google Provider && Github Provider ...  ::
    const googleProvider=new GoogleAuthProvider()
    const GithubProbider=new GithubAuthProvider()

    // User Creater
    const CreateUser=(email,Password)=>{
        return createUserWithEmailAndPassword(auth,email,Password)
    }

    // User Login
    const login=(email,Password)=>{
        return signInWithEmailAndPassword(auth,email,Password)
    }

    // Logout 

    const Logout=()=>{
        setuser(null)
        return signOut()
    }

    // Google Sign in

    const GoogleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // GithubLogin
    const GithubLogin=()=>{
        return signInWithPopup(auth, GithubProbider)
    }

    // auth Canhge  data golo loadinde holau dora rhka 

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
        })
        return()=>{
            unSubscribe();
        }
    
        
    },[])


    

    const Info={
        user,
        CreateUser,
        login,
        Logout,
        GoogleLogin,
        GithubLogin,

    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;