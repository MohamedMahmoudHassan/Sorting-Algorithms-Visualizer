import React from "react";
import VisualizationButton from "./visualizationButton";

const VisualizationControlBar = ({ handleSortStart }) => {
  return (
    <div className="py-5 bg-secondary" style={{ margin: "auto" }}>
      <div className="container">
        <VisualizationButton
          handleClick={handleSortStart}
          role="step-backward"
          size={1}
          title="Previous Step"
        />
        <VisualizationButton handleClick={handleSortStart} role="play" size={2} title="Run" />
        <VisualizationButton
          handleClick={handleSortStart}
          role="step-forward"
          size={1}
          title="Next Step"
        />
        <VisualizationButton handleClick={handleSortStart} role="stop" size={1} />
      </div>
    </div>
  );
};

export default VisualizationControlBar;
