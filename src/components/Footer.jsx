import React from "react";
import "../componentStyle/Footer.css";
import { Logo } from "./Logo";
import paymentType from "../Images/FooterSImg/CardsFooter.svg";
import { Link } from "react-router-dom";
import instagram from "../Images/FooterSImg/instagram.svg";
import facebook from "../Images/FooterSImg/facebook.svg";
import linkedIn from "../Images/FooterSImg/LinkeedIn.svg";
import youtube from "../Images/FooterSImg/youtube.svg";
import twitter from "../Images/FooterSImg/twitter.svg";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-block1">
        <div className="logo-wrapper">
          <Logo />
          ostinger
        </div>
        <div className="Payment-accepted">
          <img src={paymentType} alt="img" />
        </div>
      </div>
      <div className="footer-block2">
        <h1 className="footer-heading">HOSTING</h1>
        <ul className="footer-list">
          <Link className="LINKSf">Web Hosting</Link>
          <Link className="LINKSf">VPS Hosting</Link>
          <Link className="LINKSf">Minecraft server Hosting</Link>
          <Link className="LINKSf">CyberPanel Hosting</Link>
          <Link className="LINKSf">Cloud Hosting</Link>
          <Link className="LINKSf">WordPress Hosting</Link>
          <Link className="LINKSf">Email Hosting</Link>
          <Link className="LINKSf">CMS Hosting</Link>
          <Link className="LINKSf">Ecommerce Hosting</Link>
          <Link className="LINKSf">Free Web Hosting</Link>
        </ul>
      </div>
      <div className="footer-block3">
        <h1 className="footer-heading">DOMAIN</h1>
        <ul className="footer-list">
          <Link className="LINKSf">Domain Name Search</Link>
          <Link className="LINKSf">Domain Transfer</Link>
          <Link className="LINKSf">Free Domain Name</Link>
          <Link className="LINKSf">XYZ Domain</Link>
          <Link className="LINKSf">Cheap Domain</Link>
          <Link className="LINKSf">Domain Extensions</Link>
          <Link className="LINKSf">WHOIS Lookup</Link>
          <Link className="LINKSf">Free SSL Certificate</Link>
        </ul>
      </div>
      <div className="footer-block4">
        <h1 className="footer-heading">INFORMATION</h1>
        <ul className="footer-list">
          <Link className="LINKSf">Migrate to Hostinger</Link>
          <Link className="LINKSf">System Status</Link>
          <Link className="LINKSf">Affiliate Program</Link>
          <Link className="LINKSf">Payment Methods</Link>
          <Link className="LINKSf">Rewards</Link>
          <Link className="LINKSf">Reviews</Link>
          <Link className="LINKSf">Pricing</Link>
          <Link className="LINKSf">Sitemap</Link>
        </ul>
        <h1 className="footer-heading">LEGAL</h1>
        <ul className="footer-list">
          <Link className="LINKSf">Privacy Policy</Link>
          <Link className="LINKSf">Terms of Service</Link>
        </ul>
      </div>
      <div className="footer-block5">
        <h1 className="footer-heading">COMPANY</h1>
        <ul className="footer-list">
          <Link className="LINKSf">About Hostinger</Link>
          <Link className="LINKSf">Our Technology</Link>
          <Link className="LINKSf">Roadmap</Link>
          <Link className="LINKSf">Customer Care</Link>
          <Link className="LINKSf">Blog</Link>
        </ul>
        <h1 className="footer-heading">HELP</h1>
        <ul className="footer-list">
          <Link className="LINKSf">Tutorials</Link>
          <Link className="LINKSf">Knowledge Base</Link>
          <Link className="LINKSf">Report Online Abuse</Link>
        </ul>
        <div className="social-links">
          <Link>
            <img src={instagram} alt="img" />
          </Link>
          <Link>
            <img src={facebook} alt="img" />
          </Link>
          <Link>
            <img src={linkedIn} alt="img" />
          </Link>
          <Link>
            <img src={twitter} alt="img" />
          </Link>
          <Link>
            <img src={youtube} alt="img" />
          </Link>
        </div>
      </div>
    </div>
  );
};
