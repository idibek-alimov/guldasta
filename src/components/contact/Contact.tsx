import React from "react";
import "./Contact.css";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div className="contact-div">
      <h2>КОНТАКТЫ</h2>
      <div className="contact-box">
        <img src="contact-img.png" alt="contact" />
        <div className="contact-info-wrapper">
          <div className="contact-text">
            <span>
              Чтобы получить ответы на интересующие вас вопросы или записаться
              на приём, напишите ваши данные, я свяжусь с вам и проконсультирую
              😉
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactForm = () => {
  return (
    <form className="form">
      <div className="name-age-box">
        <div className="name-box input-wrap">
          <span>Name</span>
          <input />
        </div>
        <div className="age-box input-wrap">
          <span>Age</span>
          <input />
        </div>
      </div>
      <div className="number-box input-wrap">
        <span>Number</span>
        <input />
      </div>
      <div className="extra-box input-wrap">
        <span>Extra</span>
        <textarea />
      </div>
      <Button text="Подать заявку" />
    </form>
  );
};
