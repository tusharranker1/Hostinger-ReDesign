import React from "react";
import "../componentStyle/OurServices.css";
import { OurServicesComp } from "./OurServicesComp";
import SSl from "../Images/ServiceLogo/SSl.svg";
import FreeMigration from "../Images/ServiceLogo/FreeMigration.svg";
import PhpBoost from "../Images/ServiceLogo/PhpBoost.svg";
import techSupport from "../Images/ServiceLogo/7 Tech.svg";
import AccessMangment from "../Images/ServiceLogo/AccessMangment.svg";
import AutmaticBackups from "../Images/ServiceLogo/AutmaticBackups.svg";
import LiteSpeed from "../Images/ServiceLogo/LiteSpeed.svg";
import AutoScript from "../Images/ServiceLogo/AutoScript.svg";
import Ecommerce from "../Images/ServiceLogo/Ecommerce.svg";
import DDos from "../Images/ServiceLogo/DDos Protection.svg";
import OneClick from "../Images/ServiceLogo/WordPressInstall.svg";
import Gurantees from "../Images/ServiceLogo/UptimeGurantee.svg";

const arr1 = [
  {
    ServiceKey: "1",
    Servicelogo: SSl,
  },
  {
    ServiceKey: "2",
    Servicelogo: FreeMigration,
  },
  {
    ServiceKey: "3",
    Servicelogo: PhpBoost,
  },
  {
    ServiceKey: "4",
    Servicelogo: techSupport,
  },
];
const arr2 = [
  {
    ServiceKey: "5",
    Servicelogo: AccessMangment,
  },
  {
    ServiceKey: "6",
    Servicelogo: AutmaticBackups,
  },
  {
    ServiceKey: "7",
    Servicelogo: LiteSpeed,
  },
  {
    ServiceKey: "8",
    Servicelogo: AutoScript,
  },
];
const arr3 = [
  {
    ServiceKey: "9",
    Servicelogo: Ecommerce,
  },
  {
    ServiceKey: "10",
    Servicelogo: DDos,
  },
  {
    ServiceKey: "11",
    Servicelogo: OneClick,
  },
  {
    ServiceKey: "12",
    Servicelogo: Gurantees,
  },
];

export const OurServices = () => {
  return (
    <div className="OurServices-wrapper">
      <h1>Our Services include:</h1>
      <div className="OurServices-about">
        <OurServicesComp arr={arr1} />
        <OurServicesComp arr={arr2} />
        <OurServicesComp arr={arr3} />
      </div>
    </div>
  );
};
