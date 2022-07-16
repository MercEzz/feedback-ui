import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";

const FeedBackList = ({ feedback, deleteFunc }) => {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} deleteFunc={deleteFunc} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedBackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedBackList;
