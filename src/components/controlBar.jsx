import React from "react";
import ArrayControlBar from "./arrayControlBar";
import SortControlBar from "./sortControlBar";

const ControlBar = ({
  generateNewArray,
  changeArrayLength,
  changeArrayInitialOrder,
  currentOrder,
  startSort,
  changeSortAlgorithm,
  currentAlgorithm,
  isSorting
}) => {
  return (
    <div className="py-5 bg-secondary">
      <div className="container">
        <ArrayControlBar
          generateNewArray={generateNewArray}
          changeArrayLength={changeArrayLength}
          changeArrayInitialOrder={changeArrayInitialOrder}
          currentOption={currentOrder}
          isSorting={isSorting}
        />
        <SortControlBar
          startSort={startSort}
          changeSortAlgorithm={changeSortAlgorithm}
          currentOption={currentAlgorithm}
          isSorting={isSorting}
        />
      </div>
    </div>
  );
};

export default ControlBar;
