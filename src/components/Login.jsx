/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config";
import "./Login.css";

function Login({ setIsAuth }) {
  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      window.location.pathname = "/blogproject4";
    });
  }

  return (
    <div className="login__page">
      <p className="login__label">Sign in With Google Account</p>
      <button className="login__btn" onClick={handleLogin}>
        Sign in With Google{" "}
      </button>
    </div>
  );
}

export default Login;
