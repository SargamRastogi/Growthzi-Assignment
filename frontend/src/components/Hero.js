import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "../styles/Hero.css";

function Hero() {
  const [isEditingText, setIsEditingText] = useState(false);
  const [isEditingButton, setIsEditingButton] = useState(false);

  const [text, setText] = useState(
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et."
  );
  const [buttonText, setButtonText] = useState("Download My CV");
  const [buttonColor, setButtonColor] = useState("#ff6600");

  const handleSave = async (field, value) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          component: "Hero",
          field,
          value,
        }),
      });

      await response.json();

      if (field === "paragraph") setIsEditingText(false);
      if (field === "button") setIsEditingButton(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <div className="section-heading-contain">
                 <div className="section-heading">
            <div className="circle-icon"></div>
        <h3>I AM DESIGNER</h3>
          </div>
        </div>

     <h1>
          Creative Design <br /> and Web Solutions
        </h1>

       
        <div className="editable-wrapper">
          {isEditingText ? (
            <div className="editor-box">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                className="editor-textarea"
              />
              <div className="editor-actions">
                <button
                  className="btn save-btn"
                  onClick={() => handleSave("paragraph", text)}
                >
                  Save Changes
          </button>
                <button
                  className="btn cancel-btn"
                  onClick={() => setIsEditingText(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="editable-content">
              <p>{text}</p>
              <FaEdit
                className="edit-icon"
                onClick={() => setIsEditingText(true)}
              />
            </div>
          )}
        </div>

    
        <div className="editable-wrapper">
          {isEditingButton ? (
            <div className="editor-box">
              <input
                type="text"
          value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="editor-input"
              />
              <input
                type="color"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
                className="editor-color"
              />
              <div className="editor-actions">
                <button
                  className="btn save-btn"
                  onClick={() =>
                    handleSave("button", { text: buttonText, color: buttonColor })
                  }
                >
                  Save Changes
                </button>
            <button
                  className="btn cancel-btn"
                  onClick={() => setIsEditingButton(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="editable-content">
              <button
                className="cv-btn"
                style={{ backgroundColor: buttonColor }}
              >
                {buttonText}
              </button>
              <FaEdit
                className="edit-icon"
                onClick={() => setIsEditingButton(true)}
              />
            </div>
          )}
        </div>
      </div>

  
      <div className="hero-right">
        <img src="/hero.png" alt="Hero" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
