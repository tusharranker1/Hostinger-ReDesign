import React from "react";
import "../componentStyle/Languages.css";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const lang = [
  {
    id: "1",
    countryimg:
      "https://th.bing.com/th/id/OIP.WlG3exKxQ059kgREoXQXOQHaD6?w=280&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "United States",
    lan: "English",
  },
  {
    id: "2",
    countryimg:
      "https://th.bing.com/th/id/OIP.mj6ZxHH_YhezE3baAh0MNwHaEs?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "India",
    lan: "English",
  },
  {
    id: "3",
    countryimg:
      "https://th.bing.com/th/id/OIP.9L0hpvw3Ihf5AxRM1jpi1QHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "Polska",
    lan: "Polski",
  },
  {
    id: "4",
    countryimg:
      "https://th.bing.com/th/id/OIP.u85XDacsBp9nvxTRIryWpAHaEo?w=305&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "Portugal",
    lan: "Portugues",
  },
  {
    id: "5",
    countryimg:
      "https://th.bing.com/th/id/OIP.YDMoRYCzaE0-6hV5ltp5DwHaE8?w=228&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "Indonesia",
    lan: "Indonesia",
  },
  {
    id: "6",
    countryimg:
      "https://th.bing.com/th/id/OIP.PuA4KsC51BXE8wdVk6WGfQHaEw?w=244&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "Argentina",
    lan: "Espanol",
  },
  {
    id: "7",
    countryimg:
      "https://th.bing.com/th/id/OIP.JoenChSAZlRtogGHCIELqgHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "Danmark",
    lan: "Dansk",
  },
  {
    id: "8",
    countryimg:
      "https://th.bing.com/th/id/OIP.9cYHHL63NM-8UqZaudcdMAHaEE?w=333&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    countryName: "United Kindom",
    lan: "English",
  },
];

// const languageUpdate;

export const Languages = () => {
  function setTheLanguage(e) {
    console.log(e);
  }

  return (
    <div className="main-wrapper">
      <div className="search-wrapper">
        <input type="search" placeholder="Search"></input>
        <Logo />
        <Link to="./" className="retrunLinkLang">
          <div className="cross" />
        </Link>
      </div>
      <div className="lang-wrapper">
        {lang.map((item) => {
          return (
            <div
              className="country-wrapper"
              onClick={setTheLanguage}
              key={item.id}
            >
              <img src={item.countryimg} alt="country img" />
              <h1>{item.countryName}</h1>
              <h3>{item.lan}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
