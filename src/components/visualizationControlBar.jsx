import React from "react";
import VisualizationButton from "./visualizationButton";

const VisualizationControlBar = ({ handleSortStart }) => {
  return (
    <div className="py-5 bg-primary">
      <div className="container">
        <VisualizationButton handleSortStart={handleSortStart} />
      </div>
    </div>
  );
};

export default VisualizationControlBar;
