import { FaTimes } from "react-icons/fa";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";
import FeedbackContext from "../context/FeedBackContext";

const FeedBackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
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
