import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-heading-container">
  <div className="section-heading">
    <div className="circle-icon"></div>
    <h3>My Contact</h3>
    
  </div>
</div>
   <h2 className="title">I WANT TO HEAR FROM YOU</h2>
        

        <div className="contact-container">
       
          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
                <input type="tel" placeholder="Your phone" />
            <input type="text" placeholder="Subject" />
         <textarea placeholder="Your message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Me Message</button>
          </form>

       
          <div className="contact-info">
               <p><FaMapMarkerAlt className="icon" /> Address <br /> 202 Dag Hill Lane Beloit, KS 67420</p>
            <p><FaPhoneAlt className="icon" /> Phone <br /> +1 509 574 5175</p>
            <p><FaEnvelope className="icon" /> Email <br /> credesign@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
