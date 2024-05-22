import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
function SignUpForm() {
  const [capVal, setCapVal] = useState(null);
  const myVariable = import.meta.env.VITE_SITE_KEY;

  return (
    <div className="bg-login-bg-image w-[60%] flex justify-center">
      <div className="flex justify-center w-full items-center gap-[4rem] bg-[#22222280] px-12 py-10">
        <form className="w-[50%] p-10 shadow-lg bg-white   rounded-lg">
          <h1 className="text-4xl block  font-bold text-theme-red text-center">
            SignUp
            <br />
          </h1>
          <div className="mt-4 relative">
            <label
              className="  text-xl text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Full Name
            </label>
            <input
              type="text"
              className=" w-full text-xl border mt-4 px-4  py-6 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              placeholder=""
            />
          </div>
          <div className="mt-4 relative">
            <label
              className="  text-xl text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              className=" w-full text-xl border mt-4 px-4  py-6 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              placeholder=""
            />
          </div>

          <div className="mt-5 relative">
            <label
              className="absolute text-xl text-theme-red top:[-1] left-1 bg-white px-3 py-1   "
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className=" w-full text-xl border  mt-4  py-6 px-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder=""
            />
          </div>
          <div className="mt-4 relative">
            <label
              className="  text-xl text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Comfirm Password
            </label>
            <input
              type="password"
              className=" w-full text-xl border mt-4 px-4  py-6 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              placeholder=""
            />
          </div>

          <div className="captcha w-full mt-8 mb-8">
            <ReCAPTCHA
              className="flex justify-center mt-2 rounded-lg"
              sitekey={myVariable}
              onChange={(val) => setCapVal(val)}
            />
          </div>

          <div className="mb-8">
            <button
              disabled={!capVal}
              type="submit"
              className='border-2 text-3xl overflow-hidden  w-full   font-semibold className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300 disabled:cursor-not-allowed '
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-theme-red text-2xl mb-2">Forget Password?</p>
            <p className="text-2xl">
              Already have an account?{" "}
              <Link to={"/login"} className="text-theme-red">
                Login
              </Link>
            </p>
          </div>
        </form>
        <div className="w-[50%] text-center">
          <img src={logo} alt="" />
          <p className="text-center text-xl text-white font-400">
            Make a CV to define yourself The right away. Meet thousands of job
            announcements and employers by the help of your profile with a
            private extension, which you can share at all social media
            environments.
          </p>
          <Link to={"/login"}>
            <button className='bg-white  overflow-hidden w-1/3 p-4 text-2xl text-theme-red rounded-2xl mt-10 className="text-[1.6rem] leading-[1.6rem] relative z-10  hover:text-white px-[2rem] py-[1.2rem]  transition-all  before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-red before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300"'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
