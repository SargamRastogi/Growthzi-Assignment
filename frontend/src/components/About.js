import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
       
             <div className="about-left">
          <img src="/about.jpg" alt="About Me" className="about-image" />
        </div>

       
        <div className="about-right">
        <div className="section-heading-container">
  <div className="section-heading">
    <div className="circle-icon"></div>
    <h3>About me</h3>
      
  </div>
  
</div>
          <h2 className="section-title">I Can Design Anything You Want</h2>
          <p className="about-text">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <GiAchievement className="stat-icon" />
              <div>
                <h3>350+</h3>
                <p>Complete Project</p>
              </div>
            </div>
            <div className="stat-box">
              <MdOutlineTimer className="stat-icon" />
              <div>
                <h3>16+</h3>
                <p>Year of experience</p>
              </div>
            </div>
          </div>

        
               <ul className="about-features">
            <li><FaCheckCircle className="check-icon" /> Work simple and clean design</li>
            <li><FaCheckCircle className="check-icon" /> Web Design Full stack</li>
            <li><FaCheckCircle className="check-icon" /> New idea and user friendly design</li>
            <li><FaCheckCircle className="check-icon" /> Unlimited Revisions</li>
          </ul>

         
          <a href="/cv.pdf" className="btn">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
