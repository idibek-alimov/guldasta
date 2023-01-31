import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header-box">
        <div className="header-wrapper">
          <div className="logo-box">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="item-box">
            <TopNavItem text={"Главная"} />
            <TopNavItem text={"Услуги"} />
            <TopNavItem text={"О нас"} />
            <TopNavItem text={"Отзывы"} />
            <TopNavItem text={"Контакты"} />
          </div>
          <div className="contact-box">
            <img src="phone-img.png" alt="phone" />
            <img src="vk-img.png" alt="vk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

interface TopNavItemProp {
  text: string;
}

const TopNavItem = ({ text }: TopNavItemProp) => {
  return <div className="nav-item-text">{text}</div>;
};
