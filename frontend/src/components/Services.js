import React from "react";
import "../styles/Services.css";
import { FaMobileAlt, FaLaptopCode, FaPaintBrush, FaWordpress, FaCogs, FaSearch, FaUserTie } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  const services = [
    { icon: <MdOutlineDesignServices />, title: "UI/UX Design" },
    { icon: <FaMobileAlt />, title: "Mobile App" },
      { icon: <FaPaintBrush />, title: "Graphic Design" },
    { icon: <FaLaptopCode />, title: "Web Developer" },
    { icon: <FaSearch />, title: "SEO Optimisation" },
      { icon: <FaWordpress />, title: "WordPress Developer" },
    { icon: <FaCogs />, title: "App Development" },
     { icon: <FaUserTie />, title: "Business Strategy" },
  ];

  return (
    <section className="services">
        <div className="section-heading-container">
  <div className="section-heading">
    <div className="circle-icon"></div>
    <h3>My services</h3>
      
  </div>
  
</div>
    <h2 className="section-title">SERVICES I OFFER</h2>
      <div className="services-grid">
        
        {services.map((service, index) => (
            <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
       <h3>{service.title}</h3>
            <p>Her own power of choice is untrammelled and when nothing prevents our being able.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
