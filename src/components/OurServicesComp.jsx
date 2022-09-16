import React, { useState } from "react";

export const OurServicesComp = ({ arr }) => {
  const [ServiceCom, setServiceComp] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1160) {
      setServiceComp(true);
    } else {
      setServiceComp(false);
    }
  });

  return (
    <div className="OurServicesComp-wrapper">
      {arr.map((item) => {
        return (
          <div
            key={item.ServiceKey}
            className={
              ServiceCom
                ? "OurServicesComp-wrapper-block active "
                : "OurServicesComp-wrapper-block"
            }
          >
            <img src={item.Servicelogo} alt="Simg" />
          </div>
        );
      })}
    </div>
  );
};
