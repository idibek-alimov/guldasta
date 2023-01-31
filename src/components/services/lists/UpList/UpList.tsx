import React from "react";
import "./UpList.css";
import UpItem from "../../Items/UpItem/UpItem";
const UpList = () => {
  return (
    <div className="up-list-div">
      <div className="up-list-box">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return <UpItem />;
        })}
      </div>
    </div>
  );
};

export default UpList;
