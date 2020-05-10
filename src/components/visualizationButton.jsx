import React from "react";

const VisualizationButton = ({ role, size, handleClick }) => {
  return (
    <i className={`fa fa-${role}-circle  fa-${size}x`} aria-hidden="true" onClick={handleClick} />
  );
};

export default VisualizationButton;
