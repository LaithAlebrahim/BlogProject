import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not__found">
      <h1 className="back__title">Sorry</h1>
      <p className="back__label">The page you are looking for does not exist</p>
      <Link className="link__back" to="/blogproject4">
        Back to HomePage ......
      </Link>
    </div>
  );
}

export default NotFound;
