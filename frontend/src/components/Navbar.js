import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
     
      <a href="#home" className='logo'>
        <h2>Cre<span>Design</span></h2>
      </a>

      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
      </ul>

      <a href="#contact">
        <button className='contact-btn'>Contact Us</button>
      </a>
    </div>
  );
}

export default Navbar;
