import React, { useState } from "react";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    // + sign will convert the string into an integer
    setSelected(+e.currentTarget.value);
    selected(select);
  };

  return <div>RatingSelect</div>;
};

export default RatingSelect;
