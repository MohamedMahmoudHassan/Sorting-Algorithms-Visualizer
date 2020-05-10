import React from "react";
import ArrayControlBar from "./arrayControlBar";
import SortControlBar from "./sortControlBar";

const ControlBar = ({
  generateNewArray,
  arrayLength,
  changeArrayLength,
  recoverArray,
  changeArrayInitialOrder,
  currentOrder,
  handleSortStart,
  changeSortAlgorithm,
  currentAlgorithm,
  isSorting
}) => {
  return (
    <div className="py-5 bg-secondary">
      <div className="container">
        <ArrayControlBar
          generateNewArray={generateNewArray}
          arrayLength={arrayLength}
          changeArrayLength={changeArrayLength}
          recoverArray={recoverArray}
          changeArrayInitialOrder={changeArrayInitialOrder}
          currentOption={currentOrder}
          isSorting={isSorting}
        />
        <SortControlBar
          handleSortStart={handleSortStart}
          changeSortAlgorithm={changeSortAlgorithm}
          currentOption={currentAlgorithm}
          isSorting={isSorting}
        />
      </div>
    </div>
  );
};

export default ControlBar;
