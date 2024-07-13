import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, Logout } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update">Update profile</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contract</NavLink>
      </li>
 
      <li>
        <NavLink to="/resorce">Resource</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div data-aos-delay="500">
            <div className="flex items-center">
              <img height={50} width={90} src="/src/assets/land.jpg" alt="" />
              <a className="text-4xl  ">
                <span className="text-green-400">Land</span> Sale
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end  gap-3">
          {user?.email ? (
            <div className=" z-50 relative  dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="     w-12 rounded-full">
                  <div className=" pt-3 relative z-50 tooltip" data-tip="hello">
                    <img
                      className=""
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />

  
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100
           rounded-box w-52 "
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button onClick={Logout} className="btn btn-sm btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          )}

          <div>{/* Signout Logc golo ..  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
