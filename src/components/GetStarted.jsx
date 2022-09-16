import React from "react";
import { Link } from "react-router-dom";
import "../componentStyle/GetStarted.css";

export const GetStarted = () => {
  return (
    <Link to="/getStarted" className="getStartedLink">
      <div className="btn-wrapper">Get Started</div>
    </Link>
  );
};
