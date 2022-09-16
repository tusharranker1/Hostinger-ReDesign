import React from "react";
import { Link } from "react-router-dom";
import "../componentStyle/EasyToSetUpComp.css";

export const EasyToSetUpComp1 = ({
  id,
  overview,
  content,
  heading,
  link,
  gif,
}) => {
  return (
    <div className="EasyToSetUp-wrapper" key={id}>
      <div className="EasyToSetUp-content">
        <h2>{overview}</h2>
        <h1>{heading}</h1>
        <p>{content}</p>
        <Link to={link} className="linked-item">
          Check Out
        </Link>
      </div>
      <div className="EasyToSetUp-Img">
        <img src={gif} alt="img" />
      </div>
    </div>
  );
};
