import React from "react";
import PRICING_IMG from "../Images/PriningImg.svg";
import "../componentStyle/BestWebHosting.css";
import { Link } from "react-router-dom";

export const BestWebHosting = () => {
  return (
    <div className="BestWebHosting-wrapper">
      <h1 className="BestHosting-heading">Best Service</h1>
      <ol className="BestHostingList">
        <li>
          {" "}
          ✅ <span>Unmetered</span> traffic (Unlimited GB)
        </li>
        <li>
          {" "}
          ✅ <span>100</span> Website
        </li>
        <li>
          {" "}
          ✅ <span>Unmetered</span> Free SSL
        </li>
        <li>
          {" "}
          ✅ <span>Optimized</span> for WordPress
        </li>
        <li>
          {" "}
          ✅ <span>Free</span> Domain
        </li>
      </ol>
      <div class="BestHosting-pricing">
        <img src={PRICING_IMG} alt="" />
      </div>
      <Link class="BestHosting-purchaseBtn" to="/checkout">
        Select
      </Link>
      <Link className="checkFeatures" to="/allSubscription">
        See all features
      </Link>
    </div>
  );
};
