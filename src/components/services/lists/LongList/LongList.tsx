import React from "react";
import "./LongList.css";
import LongItem from "../../Items/LongItem/LongItem";
const LongList = () => {
  return (
    <div className="long-list-div">
      <div className="long-list-box">
        {[1, 2, 3, 4].map((i) => {
          return <LongItem />;
        })}
      </div>
    </div>
  );
};

export default LongList;
