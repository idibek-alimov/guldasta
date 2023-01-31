import React from "react";
import "./Scroller.css";

const Scroller = () => {
  return (
    <div className="scroll-div">
      <div className="scroll-box">
        <img src="arrow-left.png" alt="left" className="pointer" />
        <div className="scroll-content">
          <ScrollItem />
          <ScrollItem />
          <ScrollItem />
          <ScrollItem />
          <ScrollItem />
          <ScrollItem />
        </div>
        <img src="arrow-right.png" alt="right" className="pointer" />
      </div>
    </div>
  );
};

export default Scroller;

const ScrollItem = () => {
  return (
    <div className="scroll-item">
      <img src="scroll-item-img.png" alt="img" />
      <div>
        <h3>Name 👩</h3>
        <span>Thank you so much) lalalalallalal</span>
      </div>
    </div>
  );
};
