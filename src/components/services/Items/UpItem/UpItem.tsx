import React from "react";
import "./UpItem.css";
import Button from "../../../button/Button";
const UpItem = () => {
  return (
    <div className="up-item-div">
      <div className="up-item-box">
        <div className="pic-box">
          <img src="up-img.png" alt="up-img" />
        </div>
        <div className="detail-box">
          <span>Название услуги</span>
          <span className="price">500₽</span>
          <Button text={"Подробнее"} />
        </div>
      </div>
    </div>
  );
};

export default UpItem;
