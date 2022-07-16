import PropTypes from "prop-types";
import React from "react";

const FeedBackStats = ({ feedback }) => {
  // calculating ratings average
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  avg = avg.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
};

FeedBackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedBackStats;