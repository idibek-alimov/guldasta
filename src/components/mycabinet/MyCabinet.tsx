import React from "react";
import "./MyCabinet.css";

const MyCabinet = () => {
  return (
    <div className="cabinet-div">
      <div className="cabinet-box">
        <h3>Мой кабинет</h3>
        <div className="cabinet-pic-box">
          <div className="img">
            <h2>PHOTO</h2>
          </div>
          <div className="img">
            <h2>PHOTO</h2>
          </div>
          <div className="img">
            <h2>PHOTO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCabinet;
