import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext,useEffect, useState } from "react";
import auth from "../Fierbase/Fierbase.config.init";

 

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    //  User Data 
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    // Create Google Provider && Github Provider ...  ::
    const googleProvider=new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider();
    

    // User Creater
    const CreateUser=(email,Password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,Password)
    }

    // User Login
    const login=(email,Password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,Password)
    }

    // Update Profile 
     
    const UpdateProfile=(name,image)=>{
        updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image,
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }


    // Logout 

    const Logout=()=>{
        setloading(true)
        setuser(null)
        return signOut(auth)
    }

    // Google Sign in

    const GoogleLogin=()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // GithubLogin
    const GithubLogin=()=>{
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
        .then(res=>console.log(res))
        .catch(error=>console.log(error.message))
    }

    // auth Canhge  data golo loadinde holau dora rhka 
 
 useEffect(()=>{
    onAuthStateChanged(auth,currentuser=>{
        console.log(currentuser);
        setuser(currentuser)
        setloading(false)
    })
    return 
 },[])


    

    const Info={
        user,
        CreateUser,
        login,
        Logout,
        GoogleLogin,
        GithubLogin,
        loading,
        UpdateProfile

    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;