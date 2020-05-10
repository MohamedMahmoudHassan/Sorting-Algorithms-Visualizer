import React from "react";

const VisualizationButton = ({ handleSortStart }) => {
  return <i class="fa fa-play-circle  fa-5x" aria-hidden="true" onClick={handleSortStart} />;
};

export default VisualizationButton;
