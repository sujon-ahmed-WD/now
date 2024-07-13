import {TERipple } from "tw-elements-react";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-toastify';
import { useState } from "react";
 

const Ragister = () => {
  const { CreateUser } = useAuth();
   const [error,seterror]=useState(null)

  const handleRagister = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);

    const name = from.get("name");
    const email = from.get("email");
    const Password = from.get("password");
    console.log(name, email, Password);

    
     const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/;

     if(Password!==strongPasswordRegex)
     {
      seterror.toast("invalid  Password")
     }

    // CreateUser Work now
    CreateUser(email, Password)
    .then(res=>toast('successfully register',res))
    .catch(error=>toast('data is mistake',error))
 
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="/src/assets/land.jpg"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are{" "}
                        <span className="text-green-300 font-bold">Ahmad</span>{" "}
                        Team
                      </h4>
                    </div>

                    <form onSubmit={handleRagister}>
                      <p className="mb-4 text-xl">
                        Please{" "}
                        <span className="text-2xl font-bold text-green-400">
                          Ragister
                        </span>{" "}
                        to your account
                      </p>
                      {/* <!--Username input--> */}

                      <input
                        name="name"
                        type="text"
                       
                        className="mb-4 block w-full input input-bordered"
                        placeholder="UserName"
                        required
                      ></input>
                      <input
                        name="name"
                         
                        className="mb-4 block w-full input input-bordered"
                        placeholder="PhotoURl"
                      ></input>

                      <input
                        name="email"
                        type="email"
                        
                        className="mb-4 block w-full input input-bordered"
                        placeholder="Email"
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        name="password"
                        type="password"
                        
                        className="mb-4 block w-full input input-bordered"
                        placeholder="Password"
                      ></input>
                      {
                          error && <span className="text-red-400" >{error}</span>
                        }

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className=" btn mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #4CAF50, #388E3C, #43A047, #2E7D32)",
                            }}
                          >
                            Ragister
                          </button>
                        </TERipple>
                      </div>

                      {}
                      <div className="flex items-center justify-between pb-6">
                        <button
                          // onClick={handleRagister}
                          className="flex items-center gap-11"
                        >
                          <p className="mb-0 mr-2">Already have an account?</p>
                          <TERipple rippleColor="light">
                            <Link
                              to="/login"
                              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
                            >
                              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                                <svg
                                  className="w-7 h-7"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </span>
                              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                                Login
                              </span>
                              <span className="relative invisible">Login</span>
                            </Link>
                          </TERipple>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #4CAF50, #388E3C, #43A047, #2E7D32)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ragister;
