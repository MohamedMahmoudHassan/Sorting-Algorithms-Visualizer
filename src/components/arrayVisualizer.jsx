import React from "react";
import ArrayBar from "./arrayBar";
import VisualizationControlBar from "./visualizationControlBar";

const ArrayVisualizer = ({
  elements,
  runSort,
  pauseSort,
  applySortStep,
  updateSortInterval,
  recoverArray,
  isSorting,
  isBeforeSort
}) => {
  const style = { width: 1000, height: 500, margin: "auto" };
  return (
    <div>
      <div className="row" style={style}>
        <div className="row" style={{ margin: "auto" }}>
          {elements.map((element, index) => (
            <ArrayBar maxValue={500} element={element} barsNumber={elements.length} key={index} />
          ))}
        </div>
      </div>
      {isBeforeSort ? (
        <VisualizationControlBar
          runSort={runSort}
          pauseSort={pauseSort}
          applySortStep={applySortStep}
          updateSortInterval={updateSortInterval}
          recoverArray={recoverArray}
          isSorting={isSorting}
        />
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default ArrayVisualizer;
