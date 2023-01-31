import React from "react";
import "./LongItem.css";
import Button from "../../../button/Button";
const LongItem = () => {
  return (
    <div className="long-item-div">
      <div className="long-item-box">
        <div className="pic-box">
          <img src="long-img.png" alt="long-img" />
          <img src="long-img.png" alt="long-img" />
        </div>
        <div className="detail-box">
          <span>Комплект 1: Услуга 1 + Услуга 2 + Услуга 3</span>
          <span className="price">1500₽</span>
          <Button text={"Подробнее"} />
        </div>
      </div>
    </div>
  );
};

export default LongItem;
