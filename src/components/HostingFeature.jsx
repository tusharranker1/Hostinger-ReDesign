import React, { useState } from "react";
import "../componentStyle/HostingFeature.css";
import { PricingAndFeatures } from "./PricingAndFeatures";

export const HostingFeature = () => {
  const [headingactive, setactiveheading] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setactiveheading(true);
    } else {
      setactiveheading(false);
    }
  });

  return (
    <div className="HostingFeature-Wrapper">
      <h1
        className={
          headingactive
            ? "HostingFeature-heading active"
            : "HostingFeature-heading"
        }
      >
        All-In-One-Web Hosting
      </h1>
      <PricingAndFeatures />
    </div>
  );
};
