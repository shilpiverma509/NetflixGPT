import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { MAIN_TRAILER, USER_AVATAR } from "../utils/constant";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    const userName = name?.current?.value ? name.current.value : null;
    const message = checkValidData(
      userName,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(` ${errorCode}`, errorMessage);
          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          /*    const errorCode = error.code;
          const errorMessage = error.message; */
          setErrorMessage(`User not found`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={MAIN_TRAILER} alt="trailer" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white flex flex-col absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 to-transparent rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-2 my-2 w-full bg-gray-800 rounded-lg"
            type="text"
            placeholder="Full Name"
            name="name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="Email or phone number"
          name="email"
        />
        <input
          ref={password}
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg py-3">{errorMessage}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="rounded-lg p-2 my-6 bg-red-700 w-full"
        >
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
