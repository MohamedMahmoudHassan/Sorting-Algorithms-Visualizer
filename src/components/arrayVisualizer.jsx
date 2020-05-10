import React from "react";
import ArrayBar from "./arrayBar";
import VisualizationControlBar from "./visualizationControlBar";

const ArrayVisualizer = ({ elements, startSort, pauseSort, recoverArray, isSorting }) => {
  return (
    <div>
      <div className="row" style={{ height: 500, margin: "auto" }}>
        <div className="row" style={{ margin: "auto" }}>
          {elements.map((element, index) => (
            <ArrayBar maxValue={500} element={element} barsNumber={elements.length} key={index} />
          ))}
        </div>
      </div>
      <VisualizationControlBar
        startSort={startSort}
        pauseSort={pauseSort}
        recoverArray={recoverArray}
        isSorting={isSorting}
      />
    </div>
  );
};

export default ArrayVisualizer;
