import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

             <div className="footer-about">
          <h2 className="logo">Cre<span>Design</span></h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
          </p>
          <p>Email: credesign@gmail.com</p>
        </div>

      
        <div className="footer-links">
          <h3>Explore Link</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
             </ul>
        </div>

    
        <div className="footer-services">
          <h3>My Services</h3>
                <ul>
            <li>UI/UX Design</li>
            <li>Mobile Apps</li>
            <li>Graphic Design</li>
            <li>Web Developer</li>
          </ul>
        </div>

   
        <div className="footer-social">
         <h3>Follow me</h3>
<div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
  <a href="https://behance.net" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
</div>

<p><FaMapMarkerAlt /> 202 Dag Hill Lane Beloit, KS 67420</p>
<p><FaPhone /> 1-800-915-6270</p>

        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved © 2023 CreDesign</p>
        <p>Terms & Condition | Privacy policy</p>
      </div>
    </footer>
  );
};

export default Footer;
