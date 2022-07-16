import React, { useState } from "react";
import PropTypes from "prop-types";

const FeedBackItem = ({ item }) => {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
};

FeedBackItem.propTypes = {};

export default FeedBackItem;
