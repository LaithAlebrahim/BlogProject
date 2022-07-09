/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config";
import styles from "./Login.module.css";

function Login({ setIsAuth }: { setIsAuth: (isAuth: any) => void }) {
  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      window.location.pathname = "/blogproject4";
    });
  }

  return (
    <div className={styles.login__page}>
      <p className={styles.login__label}>Sign in With Google Account</p>
      <button className={styles.login__btn} onClick={handleLogin}>
        Sign in With Google{" "}
      </button>
    </div>
  );
}

export default Login;
