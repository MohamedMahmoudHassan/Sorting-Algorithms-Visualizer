import React from "react";
import VisualizationButton from "./visualizationButton";

const VisualizationControlBar = ({ handleSortStart }) => {
  return (
    <div className="py-5 bg-secondary">
      <div className="container">
        <VisualizationButton handleClick={handleSortStart} role={"play"} size={5} />
      </div>
    </div>
  );
};

export default VisualizationControlBar;
