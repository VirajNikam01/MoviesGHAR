import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, removeUser } from "../utility/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign Out
      })
      .catch((error) => {
        //An error happen
      });
  };

  useState(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            emsil: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
       navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="flex justify-between absolute p-3 z-10 sm:px-10 bg-gradient-to-b from-black w-full">
      <div>
        <h1 className="text-white text-2xl sm:text-4xl">
          <span className="text-teal-700 font-bold">M</span>ovies
          <span className="text-teal-700 font-bold">GHAR</span>
        </h1>
      </div>
      {user && (
        <div className="flex items-center gap-2 sm:gap-4 text-white">
          <h1>
            Hello, <span>{(user.displayName)}</span>
          </h1>
          <button
            onClick={handelSignOut}
            className="bg-teal-500 px-3 py-1 rounded font-semibold hover:bg-teal-400"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
