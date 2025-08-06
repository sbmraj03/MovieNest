import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true)

  const toggleSignInForm= () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute">
        <img
          className=" w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="logo"
        />

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full bg-black opacity-50 z-10 h-full" />


      {/* Sign In Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black opacity-85 px-10 py-8 rounded-md max-w-md w-full text-white mt-20">
          <h1 className="text-3xl font-semibold mb-6">{!isSignInForm ? "Sign In" : "Sign Up"}</h1>

          <form className="flex flex-col space-y-4">
            {
              isSignInForm && 
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
                />
            }
            <input
              type="email"
              placeholder="Email or mobile number"
              className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 cursor-pointer transition font-semibold py-3 rounded">
              {!isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="text-sm text-gray-400 mt-6">
            {!isSignInForm ? "New to Netflix?" : "Already a User"} {" "}
            <a href="#" className="text-white hover:underline" onClick={toggleSignInForm}>
              {!isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
