import React, { useState } from "react";
import PropTypes from "prop-types";

const FeedBackItem = (props) => {
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};

FeedBackItem.propTypes = {};

export default FeedBackItem;
