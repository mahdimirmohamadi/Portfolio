import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_9h5sucj",
        "template_e797phf",
        formRef.current,
        "user_hb9uIOQL00mJMevFi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone image" className="c-icon" />
              +98 910 0770 673
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="email icon image" />
              mahdimirmohamadi13@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="address icon image" />
              Tehran, Iran <br></br>Sohrevardi Shomali
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to Hire me?</b> Get in touch. Always available for Good
            Hiring Opputunities
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              rows="5"
              placeholder="message..."
            />
            <button type="submit">Submit </button>
            {done && "Thank you for your message! <3"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
