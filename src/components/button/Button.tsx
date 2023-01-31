import React from "react";
import "./Button.css";

interface ButtonProp {
  text: string;
}
const Button = ({ text }: ButtonProp) => {
  return (
    <div className="button-box">
      <button onClick={() => alert("fuck you the app is not ready")}>
        {text}
      </button>
    </div>
  );
};

export default Button;
