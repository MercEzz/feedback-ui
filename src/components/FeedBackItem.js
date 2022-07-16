import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";

const FeedBackItem = ({ item, deleteFunc }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFunc(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedBackItem;
