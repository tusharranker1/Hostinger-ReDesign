import React from "react";
import "../componentStyle/LandingPage.css";
import { GetStarted } from "./GetStarted";
import LANDING_IMAGE_URL from "../Images/LandingPageMainImg.png";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landingPage-heading">
        Everything You Need to Create a Website
      </h1>
      <p className="landing-about">
        Join 1,278,620 website owners who are building their businesses online.
      </p>
      <GetStarted />
      <p className="landing-deal">✅ 30-day money-back-guarantee</p>
      <div className="landing-image">
        <img src={LANDING_IMAGE_URL} alt="img"></img>
      </div>
    </div>
  );
};
