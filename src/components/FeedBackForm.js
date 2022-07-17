import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";
import Button from "./Layout/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedBackContext";

const FeedBackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, []);

  const handletextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Text must be atleast 10 characters");
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      }
      addFeedback(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handletextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
      </form>
      {msg && <div className="message">{msg}</div>}
    </Card>
  );
};

FeedBackForm.propTypes = {};

export default FeedBackForm;
