import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about-div">
      <div className="about-box">
        <AboutInfo />
        <AboutReason />
      </div>
    </div>
  );
};

export default AboutUs;

const AboutInfo = () => {
  return (
    <div className="about-info">
      <h1>О НАС</h1>
      <div className="about-info-inner-box">
        <img src="about-info-pic.png" alt="about-info-pic" />
        <div className="about-info-text">
          <h2>Немного расскажу о себе!</h2>
          <div className="text">
            <span>Как я уже говорила, меня зовут Гулдаста.</span>
            <span>
              Я косметолог со стажем 1,5 года. Я прошла обучение на профессию
              младшая медицинская сестра, также проходила курсы по косметологии,
              эпиляции, перманентному макияжу, наращиванию и прочее.
            </span>
            <span>
              Сейчас набираю клиентскую базу, но уже помогла многим девушкам и
              женщинам стать более красивее и здоровее.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutReason = () => {
  return (
    <div className="about-reason">
      <span>Причина 1</span>
      <div className="about-reason-inner-box">
        <span>Причина 2</span>
        <div className="about-reason-circle-box">
          <div className="mini-reason-box top">
            <img src="reason-box-img.png" />
          </div>
          <div className="mini-reason-box left">
            <img src="reason-box-img.png" />
          </div>
          <div className="mini-reason-box bottom">
            <img src="reason-box-img.png" />
          </div>
          <div className="mini-reason-box right">
            <img src="reason-box-img.png" />
          </div>
          <div className="reason-center-img-box">
            <img src="reason-img.png" alt="reason-img" />
          </div>
        </div>
        <span>Причина 4</span>
      </div>
      <span>Причина 3</span>
    </div>
  );
};
