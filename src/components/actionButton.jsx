import React from "react";

const ActionButton = ({ handleClick, label }) => {
  return (
    <button className="btn btn-primary" onClick={handleClick} style={{ marginTop: 5 }}>
      {label}
    </button>
  );
};

export default ActionButton;
