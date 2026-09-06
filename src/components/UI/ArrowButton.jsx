import React from "react";
import { Link } from "react-router-dom";
import iconarrow from "../../assets/icon-arrow-left.svg";

export default function ArrowButton({ children, to }) {
  return (
    <Link to={to} className="button__container">
      <span className="hero__button">
        {children}
      </span>

      <span className="hero__button-line">
        <img
          className="hero__button-icon"
          src={iconarrow}
          alt="Arrow"
        />
      </span>
    </Link>
  );
}