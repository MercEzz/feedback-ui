import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Layout/Card";
import Button from "./Layout/Button";

const FeedBackForm = (props) => {
  const [text, setText] = useState("");

  const handletextChange = (e) => {
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
          <Button type="submit">send</Button>
        </div>
      </form>
    </Card>
  );
};

FeedBackForm.propTypes = {};

export default FeedBackForm;
