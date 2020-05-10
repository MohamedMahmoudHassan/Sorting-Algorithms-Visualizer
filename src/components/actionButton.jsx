import React from "react";

const ActionButton = ({ handleClick, label, isSorting, ...rest }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <button className="btn btn-primary" onClick={handleClick} {...rest} disabled={isSorting}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
