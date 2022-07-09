/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import styles from "./NavBar.module.css";

import { auth } from "./firebase-config";

export const Navbar: React.FC<{
  isAuth: boolean | string;
  setIsAuth: (isAuth: any) => void;
}> = ({ isAuth, setIsAuth }) => {
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className={styles.nav__bar}>
      <div>
        <h1 className={styles.nav__title}>Read & Write </h1>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to="/blogproject4">
          Home
        </Link>

        {!isAuth ? (
          <Link className={styles.link} to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className={styles.link} to="/create">
              Create
            </Link>
            <button className={styles.button__link} onClick={signOutUser}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
