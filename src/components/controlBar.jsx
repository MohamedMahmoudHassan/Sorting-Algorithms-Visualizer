import React from "react";
import ActionButton from "./actionButton";

const ControlBar = ({ generateNewArray }) => {
  return (
    <ActionButton
      label="Generate New Array"
      handleClick={generateNewArray}
      style={{ marginTop: 5 }}
    />
  );
};

export default ControlBar;
