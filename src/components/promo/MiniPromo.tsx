import React from "react";

const MiniPromo = () => {
  return (
    <div className="mini-promo-div">
      <div className="mini-promo-box">
        <h1 className="head-info">Добро пожаловать на сайт!</h1>
        <div className="detailed-info">
          <img src="logo2.png" alt="logo2" />
          <div className="detailed-info-text">
            <span>
              Меня зовут Гулдаста! Представляю наш сайт косметологических услуг.
              Что ты тут найдешь?
            </span>
            <ul>
              <li>Узнаешь про наши услуги</li>
              <li>Познакомишься с нами</li>
              <li>Увидишь работы и отзывы</li>
              <li>
                И если заинтересовался, сможешь легко с нами связаться 👩{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniPromo;
