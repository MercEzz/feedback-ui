import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";

const FeedBackItem = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedBackItem;
