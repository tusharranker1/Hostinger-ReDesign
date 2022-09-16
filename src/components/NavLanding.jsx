import React from "react";
import { NavigationBar } from "./NavigationBar";
import { LandingPage } from "./LandingPage";
import { HostingFeature } from "./HostingFeature";
import { OurServices } from "./OurServices";
import { PerfectDomainName } from "./PerfectDomainName";
import { EasyToSetUpComp1 } from "./EasyToSetUpComp1";
import { EasyToSeyUpComp2 } from "./EasyToSeyUpComp2";
import wordPressBg from "../Images/CompMain/bgWordpress.svg";
import performance from "../Images/CompMain/Performance.png";
import supportStaf from "../Images/CompMain/Support.png";
import Companygrowth from "../Images/CompMain/growth.png";
import { NatureToUse } from "./NatureToUse";
import "../componentStyle/NatureToUse.css";
import EaseOfUse from "../Images/NatureToUse/EaseofUse.svg";
import WordPressOptimization from "../Images/NatureToUse/WordpressOptimized.svg";
import powerfull from "../Images/NatureToUse/Powerfull.svg";
import MoneyBack from "../Images/MoneyBackPolicyImg/MoneyBack.svg";
import { GetStarted } from "./GetStarted";
import { Footer } from "./Footer";
import Downarrow from "../Images/Vector.png";

const arrComp = [
  {
    id: "1",
    overview: "EASY TO USE AND SIMLE",
    heading: "Easy to set up",
    conent:
      "Getting your website live as simple as a click of a button.Everything you need - provided in a clear way.",
    link: "/technology",
    gif: "https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif",
  },
  {
    id: "2",
    overview: "PERFORMANCE AND SPEED",
    heading: "Lightning-fast websites",
    conent:
      "Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.",
    link: "/speedPerfomance",
    gif: performance,
  },
  {
    id: "3",
    overview: "GREAT WORDPRESS EXPERIENCE",
    heading: "WordPress made easy",
    conent:
      "Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.",
    link: "/wordPress",
    gif: wordPressBg,
  },
  {
    id: "4",
    overview: "PROFESSIONAL AND HANDS-ON",
    heading: "24/7 Support",
    conent:
      "Our team of experts will solve technical issues to get your websites up and running. Anytime.",
    link: "/support",
    gif: supportStaf,
  },
  {
    id: "5",
    overview: "FLEXIBLE AND SCALABLE",
    heading: "From micro to large-scale",
    conent:
      "Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.",
    link: "/progress",
    gif: Companygrowth,
  },
];

const NatureArray = [
  {
    key: "1",
    img: EaseOfUse,
  },
  {
    key: "2",
    img: powerfull,
  },
  {
    key: "3",
    img: WordPressOptimization,
  },
];

export const NavLanding = () => {
  return (
    <>
      <NavigationBar src={Downarrow} path="/navigation" />
      <LandingPage />
      <HostingFeature />
      <OurServices />
      <PerfectDomainName />
      {arrComp.map((item, idx) => {
        if (idx % 2 === 0) {
          return (
            <EasyToSetUpComp1
              key={item.id}
              overview={item.overview}
              heading={item.heading}
              content={item.conent}
              link={item.link}
              gif={item.gif}
            />
          );
        } else {
          return (
            <EasyToSeyUpComp2
              key={item.id}
              overview={item.overview}
              heading={item.heading}
              content={item.conent}
              link={item.link}
              gif={item.gif}
            />
          );
        }
      })}
      <div className="NatureToUse-wrapper">
        {NatureArray.map((item) => {
          return <NatureToUse img={item.img} key={item.key} />;
        })}
      </div>
      <div className="MoneyBack-main">
        <img src={MoneyBack} alt="img" />
        <GetStarted />
      </div>
      <Footer />
    </>
  );
};
