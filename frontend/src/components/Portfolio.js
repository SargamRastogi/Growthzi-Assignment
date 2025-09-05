import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="section-heading-container">
        <div className="section-heading">
          <div className="circle-icon"></div>
          <h3>VISIT MY PORTFOLIO</h3>
        </div>
      </div>

      <div className="portfolio-grid">
        <div className="portfolio-item tall">
          <img src="/pr1.jpg" alt="Portfolio 1" />
        </div>
 <div className="portfolio-item">
          <img src="/pr2.jpg" alt="Portfolio 2" />
        </div>
        <div className="portfolio-item tall">
              <img src="/pr3.jpg" alt="Portfolio 3" />
        </div>
        <div className="portfolio-item">
          <img src="/pr4.jpg" alt="Portfolio 4" />
        </div>
   <div className="portfolio-item wide">
          <img src="/pr5.jpg" alt="Portfolio 5" />
        </div>
           <div className="portfolio-item">
          <img src="/pr6.jpg" alt="Portfolio 6" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
