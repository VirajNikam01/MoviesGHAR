import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, removeUser } from "../utility/userSlice";

const Header = () => {
  const [isLoginRoute, setIsLoginRoute] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login") {
      setIsLoginRoute(true);
    }
  }, []);

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
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []);

  return (
    <div
      onClick={() => navigate("/")}
      className="flex select-none cursor-pointer justify-between absolute p-3 z-10 sm:px-10 bg-gradient-to-b from-black w-full"
    >
      <div>
        <h1 className="text-white text-2xl sm:text-4xl">
          <span className="text-teal-700 font-bold">M</span>ovies
          <span className="text-teal-700 font-bold">GHAR</span>
        </h1>
      </div>
      {user ? (
        <div className="flex items-center gap-2 sm:gap-4 text-white">
          <h1>
            Hello, <span>{user.displayName.split(" ")[0]}</span>
          </h1>
          <button
            onClick={handelSignOut}
            className="bg-red-500 px-3 text-xs font-semibold py-1 rounded hover:bg-teal-400 duration-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        !isLoginRoute && (
          <button
            onClick={() => navigate("/login")}
            className="bg-teal-500 text-white h-fit py-1 duration-500 text-sm px-5 cursor-pointer  rounded font-semibold hover:bg-red-400"
          >
            Login
          </button>
        )
      )}
    </div>
  );
};

export default Header;
