import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(deleteUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  const handleGptSearch = () => {
    //Toggle my GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 z-10 bg-gradient-to-b from-black">
      <img src={LOGO} alt="Netflix logo" className="w-32" />
      {user && (
        <div className="flex p-2">
          <select
            className="m-2 p-2 bg-gray-700 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANG.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleGptSearch}
            className="opacity-80 py-2 px-2 m-2 mx-4 my-2 rounded-lg bg-purple-800 text-white"
          >
            GPT Search
          </button>
          <img src={user?.photoURL} alt="user" className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
