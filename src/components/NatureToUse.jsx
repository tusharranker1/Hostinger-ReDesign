import React, { useState } from "react";
import "../componentStyle/NatureToUse.css";

export const NatureToUse = ({ img, key }) => {
  const [NatureImg, setNatureimg] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 4600) {
      setNatureimg(true);
    } else {
      setNatureimg(false);
    }
  });

  return (
    <img
      key={key}
      src={img}
      alt="img"
      className={NatureImg ? "NatureToUse-img active" : "NatureToUse-img"}
    />
  );
};
