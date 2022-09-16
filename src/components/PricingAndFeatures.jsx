import React, { useState } from "react";
import "../componentStyle/HostingFeature.css";
import WordPress from "../Images/WordPressMain.png";
import LiteSpeed from "../Images/LiteSpeed-logo_512x512-removebg-preview.png";
import CloudFlare from "../Images/CloudFlare.png";
import { BestWebHosting } from "./BestWebHosting";

const sponsers = [
  {
    logo: WordPress,
    name: "WordPress",
  },
  {
    logo: LiteSpeed,
    name: "LiteSpeed",
  },
  {
    logo: CloudFlare,
    name: "CloudFlare",
  },
];

export const PricingAndFeatures = () => {
  const [pricingoverview, setpricingoverview] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      setpricingoverview(true);
    } else {
      setpricingoverview(false);
    }
  });

  return (
    <div className="pricing-wrapper">
      <div
        className={
          pricingoverview ? "pricing-overview active" : "pricing-overview"
        }
      >
        <BestWebHosting />
      </div>
      <div className="sponser">
        {sponsers.map((item) => {
          return (
            <div className="sponser-items">
              <h1>
                <img src={item.logo} alt="img" />
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
