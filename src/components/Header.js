import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

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
  return (
    <div className="flex justify-between w-screen absolute px-16 py-2 z-10 bg-gradient-to-b from-black">
      <img src={LOGO} alt="Netflix logo" className="w-32" />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="user" className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
