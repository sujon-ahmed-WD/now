import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Sociallogin = () => {
    const { GoogleLogin,GithubLogin}=useAuth()
  return (
    <div>
      <div>
        <button
        onClick={()=>GoogleLogin()}
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
