import React from "react";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";

const FeedBackList = ({ feedback, deleteFunc }) => {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} deleteFunc={deleteFunc} item={item} />
      ))}
    </div>
  );
};

FeedBackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedBackList;
