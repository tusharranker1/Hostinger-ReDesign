import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";
import "../componentStyle/NavigationResponsive.css";
import cross from "../Images/Cross.png";
import Hosting1 from "../Images/ResponsiveNav/WebHosting.png";
import Hosting2 from "../Images/ResponsiveNav/Cloud Hosting.svg";
import Hosting3 from "../Images/ResponsiveNav/WordPressHosting.svg";
import Hosting4 from "../Images/ResponsiveNav/VPShosting.svg";
import Hosting5 from "../Images/ResponsiveNav/CyberPannel.svg";
import Hosting6 from "../Images/ResponsiveNav/MineCraft.svg";
import Hosting7 from "../Images/ResponsiveNav/Google.svg";
import Hosting8 from "../Images/ResponsiveNav/Hostinger.svg";
import Hosting9 from "../Images/ResponsiveNav/DomainNameSeacrch.svg";
import Hosting10 from "../Images/ResponsiveNav/WhoisLookUp.svg";
import Hosting11 from "../Images/ResponsiveNav/DomainTransfer.svg";

export const NavigationPageRes = () => {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="navResponsive-wrapper">
          <NavigationBar src={cross} path="/" />
        </div>
        <div className="link-wrappers">
          <div className="linksDivision">
            <h1>Hosting</h1>
            <Link>
              <img src={Hosting1} alt="" />
            </Link>
            <Link>
              <img src={Hosting2} alt="" />
            </Link>
            <Link>
              <img src={Hosting3} alt="" />
            </Link>
          </div>
          <div className="linksDivision">
            <h1>VPS</h1>
            <Link>
              <img src={Hosting4} alt="" />
            </Link>
            <Link>
              <img src={Hosting5} alt="" />
            </Link>
            <Link>
              <img src={Hosting6} alt="" />
            </Link>
          </div>
          <div className="linksDivision">
            <h1>Domain</h1>
            <Link>
              <img src={Hosting9} alt="" />
            </Link>
            <Link>
              <img src={Hosting10} alt="" />
            </Link>
            <Link>
              <img src={Hosting11} alt="" />
            </Link>
          </div>
          <div className="linksDivision">
            <h1>Email</h1>
            <Link>
              <img src={Hosting7} alt="" />
            </Link>
            <Link>
              <img src={Hosting8} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="cartAndLogin-wrapper">
        <div>
          <Link className="CartPageLink">Check out the Cart</Link>
        </div>
        <div className="lineBetween"></div>
        <div>
          <Link className="loginBtn">Login/SignUp</Link>
        </div>
      </div>
    </>
  );
};
