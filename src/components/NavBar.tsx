/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./NavBar.css";

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
    <div className="nav__bar">
      <div>
        <h1 className="nav__title">Read & Write </h1>
      </div>
      <div className="links">
        <Link className="link" to="/blogproject4">
          Home
        </Link>

        {!isAuth ? (
          <Link className="link" to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className="link" to="/create">
              Create
            </Link>
            <button className="button__link" onClick={signOutUser}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
