import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="section-heading-container">
  <div className="section-heading">
    <div className="circle-icon"></div>
    <h3>My Portfolio</h3>
  </div>
</div>

      <h2 className="section-title">10+ YEARS OF EXPERIENCE</h2>

      <div className="timeline">

        <div className="timeline-row">
          <div className="timeline-label">Education</div>
          <div className="timeline-content">
            <div className="card">
              <h3>BSc in Computer Science</h3>
                 <p>University of ULAV (2018 - 2022)</p>
                 <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="card">
              <h3>AS - Science & Information</h3>
              <p>University of ULAV (2016 - 2018)</p>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="card">
              <h3>Secondary School Education</h3>
              <p>Kindergarten (2006 - 2016)</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>
        </div>

     
        <div className="timeline-row">
          <div className="timeline-label">Software Skills</div>
          <div className="timeline-content">
               <div className="card">
              <h3>UI/UX Design</h3>
              <p>Figma - 90%</p>
              <p>Adobe XD - 85%</p>
              <p>Photoshop - 80%</p>
            </div>
            <div className="card">
              <h3>Web Developer</h3>
              <p>WordPress - 90%</p>
              <p>ModxPlus - 85%</p>
              <p>Weebly - 80%</p>
            </div>
            <div className="card">
              <h3>App Development</h3>
              <p>Quixy - 92%</p>
              <p>AppyPie - 87%</p>
              <p>BuildApps - 82%</p>
            </div>
          </div>
        </div>

   
        <div className="timeline-row">
          <div className="timeline-label">Experience</div>
             <div className="timeline-content">
            <div className="card">
                  <h3>Web Developer & Trainer</h3>
              <p>Basic Developer Team (2012 - 2016)</p>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="card">
              <h3>Frontend Developer</h3>
              <p>Brane (2020 - 2021)</p>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="card">
              <h3>UI/UX Designer</h3>
              <p>Google Out Tech (2017 - Present)</p>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
