import React, { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";

const FeedBackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // calculating ratings average
  let avg = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
};

export default FeedBackStats;
