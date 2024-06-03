import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="trailer"
        />
      </div>
      <form className="text-white flex flex-col absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 to-transparent rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 w-full bg-gray-800 rounded-lg"
            type="text"
            placeholder="Full Name"
            name="name"
          />
        )}
        <input
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="Email or phone number"
          name="email"
        />
        <input
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className="rounded-lg p-2 my-6 bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};
