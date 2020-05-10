import React from "react";

const ActionButton = ({ handleClick, label, ...rest }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <button className="btn btn-primary" onClick={handleClick} {...rest}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
