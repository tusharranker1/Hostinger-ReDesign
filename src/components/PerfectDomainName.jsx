import React, { useState } from "react";
import "../componentStyle/PerfectDomainName.css";

export const PerfectDomainName = () => {
  const [searchBar, setSearchBar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1500) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  });

  return (
    <div className="PerfectDomainName-wrapper">
      <div
        type="text"
        className={
          searchBar
            ? "PerfectDomainName-searchHere active"
            : "PerfectDomainName-searchHere"
        }
      >
        <input placeholder="Type perfect Domain" type="text" />
      </div>

      <div className="PerfectDomainName-heading">Find the Perfect Domain</div>
    </div>
  );
};
