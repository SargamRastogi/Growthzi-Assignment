import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const feedbacks = [
    {
      name: "John K. Meraz",
      role: "CTO, Xyz Group",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old."
    },
        {
          name: "Johan Smith",
      role: "CEO, Abc Agency",
         text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old."
    },
    {
      name: "Robert E. Wolf",
        role: "Director, Techso",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old."
    },
    {
      name: "Honey Wolf",
      role: "Director, Yahoo",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old."
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-heading-container">
             <div className="section-heading">
          <div className="circle-icon"></div>
          <h3>Client Feedback</h3>
        </div>
      </div>

  <div className="testimonial-cards">
        {feedbacks.map((fb, index) => (
          <div className="testimonial-card" key={index}>
            <div className="avatar"></div>
                 <h4>{fb.name}</h4>
            <p className="role">{fb.role}</p>
            <p className="text">“{fb.text}”</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
