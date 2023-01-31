import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <div className="promo-div">
      <div className="promo-box">
        <div className="promo-info-box">
          <h1>Хочешь выглядеть неотразимо?</h1>
          <span>
            Сделаю ожидание реальностью за пару часов и индивидуально
            проконсультирую по средствам ухода за собой. Косметологические
            услуги в Магнитогорске.
          </span>
          <button>Записаться</button>
        </div>
        <div className="promo-img-box">
          <img src="promo-img.png" alt="promo-img" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
