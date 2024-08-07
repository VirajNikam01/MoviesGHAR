import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utility/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { BACKGROUND_IMAGE } from "../utility/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSignSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const btnSignInSignUp = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);

    //SignUp SignIn API(Firebase)
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signe Up logic
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/140100146?v=4",
          })
            .then(() => {
              navigate("/");
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  emsil: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className=" blur-sm h-screen w-screen"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5 w-full sm:w-96 h-full sm:h-fit sm:rounded-xl bg-black px-5 pt-20 py-12 sm:bg-opacity-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-white text-2xl font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded outline-none bg-slate-200 px-3 py-3 bg-opacity-20 text-white font-semibold placeholder:text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="rounded outline-none bg-slate-200 px-3 py-3 bg-opacity-20 text-white font-semibold placeholder:text-white"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="rounded outline-none bg-slate-200 px-3 py-3 bg-opacity-20 text-white font-semibold placeholder:text-white"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={btnSignInSignUp}
          className="bg-teal-700 px-3 py-3 text-white rounded transition-all duration-300 hover:bg-teal-500 font-semibold"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handelSignSignUp} className="text-white cursor-pointer">
          <span className="text-gray-400">
            {isSignIn ? "New to MoviesGHAR? " : " Already Registered? "}
          </span>
          {isSignIn ? " Sign up now. " : " Sign in now."}
        </p>
        <p className="text-slate-200 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
