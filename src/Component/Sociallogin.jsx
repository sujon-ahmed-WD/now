import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

 
const Sociallogin = () => {
    const { GoogleLogin,GithubLogin}=useAuth()
    const location=useLocation()
    console.log(location);
    const navigate=useNavigate()
    const handlgooglelogin=()=>{
      GoogleLogin()
      .then(( )=>{
        toast('Congaculation With Google login');

       navigate(location?.state ?location.state:'/')

      })
     .catch(error=>toast('Something missing',error))
    }
  return (
    <div className="gap-5">
      <div>
        <button
        onClick={handlgooglelogin}
         className="btn btn-outline btn-warning w-full">
          <FaGoogle />
          Login with Google
        </button>
      </div>
      <div>
        <button
        onClick={()=>GithubLogin()}
         className="btn btn-outline btn-info w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;
