import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

 
const PrivateRoute = ({children}) => {
    const {user,loding}=useAuth()
    const location=useLocation()
    console.log(location.pathname);
    if(loding)
    {
         return <div className=" h-screen flex items-center justify-center"> 
        <span className=" text-green-500  loading loading-infinity loading-lg"></span>
        </div>
    }
    if(user)
    {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;