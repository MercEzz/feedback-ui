import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedBackContext";
import Spinner from "./Layout/Spinner";

const FeedBackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feedback yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
