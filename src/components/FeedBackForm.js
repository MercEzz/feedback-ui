import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";
import Button from "./Layout/Button";

const FeedBackForm = (props) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

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

  return (
    <Card>
      <form>
        <h2>Rate our service</h2>
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
