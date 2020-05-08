import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";

const ControlBar = ({ arrayLength, generateNewArray, changeArrayLength }) => {
  return (
    <div>
      <Input
        name="length"
        label="Array Length"
        value={arrayLength}
        style={{ width: 100 }}
        onChange={changeArrayLength}
      />
      <ActionButton
        label="Generate New Array"
        handleClick={generateNewArray}
        style={{ marginTop: 5 }}
      />
    </div>
  );
};

export default ControlBar;
