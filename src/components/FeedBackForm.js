import React, { useContext, useState, useEffect } from "react";
import Card from "./Layout/Card";
import Button from "./Layout/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedBackContext";

const FeedBackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handletextChange = ({ target: { value } }) => {
    if (value === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (value !== "" && value.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Text must be atleast 10 characters");
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(value);
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
      } else {
        addFeedback(newFeedback);
      }

      setBtnDisabled(true);
      setRating(10);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our service</h2>
        <RatingSelect select={setRating} selected={rating} />
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
