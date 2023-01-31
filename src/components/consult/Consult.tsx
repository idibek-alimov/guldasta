import React from "react";
import "./Consult.css";
import Button from "../button/Button";

const Consult = () => {
  return (
    <div className="consult-div">
      <span>
        Если не знаешь, что выбрать, можешь нажать на кнопку, я бесплатно
        проконсультирую тебя
      </span>
      <Button text={"Записаться на консультацию 🧐"} />
    </div>
  );
};

export default Consult;
