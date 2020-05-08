import React from "react";

const ActionButton = ({ handleClick, label, ...rest }) => {
  return (
    <button className="btn btn-primary" onClick={handleClick} {...rest}>
      {label}
    </button>
  );
};

export default ActionButton;
