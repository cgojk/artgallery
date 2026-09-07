import React from "react";
import { Link } from "react-router-dom";

import iconarrowleft from "../../assets/icon-arrow-left.svg";
import iconarrowright from "../../assets/icon-arrow-right.svg";

export default function ArrowButton({
  children,
  to,
  variant = "right",
}) {
  const arrowIcon =
    variant === "left" ? iconarrowleft : iconarrowright;

  return (
    <Link to={to} className="button__container">
      <span className="hero__button">
        {children}
      </span>

      <span className="hero__button-line">
        <img
          className="hero__button-icon"
          src={arrowIcon}
          alt=""
        />
      </span>
    </Link>
  );
}