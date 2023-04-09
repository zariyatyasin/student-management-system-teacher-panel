import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FeatchLogin } from "../../component/Features/User/Login/LoginSlice";
import Loading from "../../component/Loading/Loading";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const {user,isLoading,error} = useSelector((state) => state.LoginUser);

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(FeatchLogin({ email, password }));
  };
  return (
    <div className="flex flex-col xl:flex-row  bg-gray-100 xl:bg-white item-center px-5 xl:px-0 h-screen justify-center">
      {user && <Navigate to={"/"} replace={true} />}
      <div className=" xl:flex-1 text-center xl:bg-[#650A30] w-full flex flex-col justify-center items-center">
        <img
          className="w-32  h-auto mr-2 xl:hidden"
          src={"./images/EDULogo.png"}
          alt="logo"
        />
        <h1 className=" text-3xl text-[#650A30] xl:text-white mb-2">
          WELCOME TO EDU
        </h1>
        <p className=" text-xs text-gray-600 xl:text-[white] max-w-lg mb-4">
          Education is the passport to the future, for tomorrow belongs to those
          who prepare for it today
        </p>
      </div>
      <section className="xl:flex-1  xl:flex items-center   justify-center">
        <div className="flex flex-col w-full items-center justify-center px-6   ">
          <a
            href="!#"
            className="flex items-center text-2xl font-semibold text-gray-900 "
          >
            <img
              className=" w-40   hidden xl:block h-auto mr-2"
              src={"./images/EDULogo.png"}
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded shadow  xl:rounded-none xl:shadow-none border xl:border-none md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4  ">
              <h1 className="text-xl font-medium  text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>

              <div>
                <p>email: admin@edu.bd</p>
                <p>pass: 123456</p>
              </div>

             {error&& <div className=" bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">{error}</div>}
             {isLoading?<div>
               <Loading/>
             </div>: <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg xl:rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your student id"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg xl:rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#650A30] text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
              </form>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
