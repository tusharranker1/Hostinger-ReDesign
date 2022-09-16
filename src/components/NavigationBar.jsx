import React, { useState } from "react";
import "../componentStyle/NavigationBarStyle.css";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import Downarrow from "../Images/Vector.png";
import CART_URL from "../Images/cart.png";

export const NavigationBar = ({ src, path }) => {
  const [navbar, setnavbar] = useState(false);
  const [languageLink, setLanguageLink] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setnavbar(true);
      setLanguageLink(true);
    } else {
      setnavbar(false);
      setLanguageLink(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={navbar ? "nav-bar active" : "nav-bar"} id="NAV_BAR">
      <div className="left-side">
        <Logo />
        <h1 className="website-heading">ostinger</h1>
        <span>
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-india_1f1ee-1f1f3.png"
            height="40px"
            width="40px"
            alt="flagImg"
            className="language-flag"
          />
          <h1>
            <Link
              to="/select-language"
              className={
                languageLink ? "language-change active" : "language-change"
              }
            >
              English
            </Link>
          </h1>
        </span>
      </div>
      <div className="right-side">
        <ol className="link-list">
          <Link className="navbarmainLink" to="/hostingNavLink">
            <li>
              Hosting{" "}
              <img src={Downarrow} alt="arrow-img" className="dropDown-img" />
            </li>
          </Link>
          <Link className="navbarmainLink" to="/VPSNavLink">
            <li>
              VPS{" "}
              <img src={Downarrow} alt="arrow-img" className="dropDown-img" />
            </li>
          </Link>
          <Link className="navbarmainLink" to="EmailNavLink">
            <li>
              Email{" "}
              <img src={Downarrow} alt="arrow-img" className="dropDown-img" />
            </li>
          </Link>
          <Link className="navbarmainLink" to="DomainNavLink">
            <li>
              Domain{" "}
              <img src={Downarrow} alt="arrow-img" className="dropDown-img" />
            </li>
          </Link>
          <Link className="navbarmainLink" to="HostingNavLink">
            <li>
              Hosting{" "}
              <img src={Downarrow} alt="arrow-img" className="dropDown-img" />
            </li>
          </Link>
          <Link className="navbarmainLink" to="LoginNavLink">
            <li>
              <div className="login-btn">LOGIN</div>
            </li>
          </Link>
          <Link className="navbarmainLink" to="CartNavLink">
            <li>
              <div className="cart-btn">
                <img src={CART_URL} alt="cartImage" className="cart-image" />{" "}
                Cart
              </div>
            </li>
          </Link>
        </ol>
      </div>
      <Link to={path}>
        <img src={src} alt="iconHere" className="resp-dropDown " />
      </Link>
    </div>
  );
};
