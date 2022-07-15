import React from "react";
import FeedBackItem from "./FeedBackItem";

const FeedBackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem />
      ))}
    </div>
  );
};

export default FeedBackList;
