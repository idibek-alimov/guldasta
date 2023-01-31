import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-div">
      <div className="review-box">
        <h3>ОТЗЫВЫ И РАБОТЫ</h3>
        <div className="review-item-box">
          <ReviewItem
            url_before="makeupbefore.jpeg"
            url_after="makeupafter.jpeg"
          />
          <ReviewItem
            url_before="makeupbefore.jpeg"
            url_after="makeupafter.jpeg"
          />
          <ReviewItem
            url_before="makeupbefore.jpeg"
            url_after="makeupafter.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;

interface ReviewItemProp {
  url_before: string;
  url_after: string;
}

const ReviewItem = ({ url_before, url_after }: ReviewItemProp) => {
  return (
    <div className="review-item">
      <ReviewItemBefore url={url_before} />
      <img src="vector.png" alt="direction" className="vector" />
      <ReviewItemAfter url={url_after} />
    </div>
  );
};

interface ReviewBeforeAfterProp {
  url: string;
}

const ReviewItemBefore = ({ url }: ReviewBeforeAfterProp) => {
  return (
    <div className="review-before-after">
      <img src={url} className="center-pic" />
      <img src="before.png" alt="before" />
    </div>
  );
};

const ReviewItemAfter = ({ url }: ReviewBeforeAfterProp) => {
  return (
    <div className="review-before-after">
      <img src={url} className="center-pic" />
      <img src="after.png" alt="after" />
    </div>
  );
};
