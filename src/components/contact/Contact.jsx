import React, { useRef } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_9h5sucj",
        "template_e797phf",
        formRef.current,
        "hb9uIOQL00mJMevFi"
      )
      .then(
        (result) => {
          console.log(result.text);
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
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="message..." />
            <button>Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
