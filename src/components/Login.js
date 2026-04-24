import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_URL}
        alt="bg"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 p-6 md:p-8 bg-black bg-opacity-80 text-white rounded-lg 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Name (only for Sign Up) */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        {/* Email */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Password */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Error */}
        <p className="text-red-500 text-sm py-1">{errorMessage}</p>

        {/* Button */}
        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle */}
        <p className="py-2 text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="text-white font-semibold cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
