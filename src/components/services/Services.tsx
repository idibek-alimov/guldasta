import React from "react";
import "./Services.css";
import UpItem from "./Items/UpItem/UpItem";
import UpList from "./lists/UpList/UpList";
import LongList from "./lists/LongList/LongList";
const Services = () => {
  return (
    <div className="service-div">
      <div className="service-box">
        <h1>УСЛУГИ</h1>
        <UpList />
        <LongList />
      </div>
    </div>
  );
};

export default Services;
