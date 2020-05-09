import React from "react";
import ArrayControlBar from "./arrayControlBar";
import SortControlBar from "./sortControlBar";

const ControlBar = ({
  generateNewArray,
  length,
  changeArrayLength,
  recoverArray,
  changeArrayInitialOrder,
  currentOrder,
  handleSortStart,
  sortInterval,
  changeSortInterval,
  changeSortAlgorithm
}) => {
  return (
    <div className="py-5 bg-secondary">
      <ArrayControlBar
        generateNewArray={generateNewArray}
        length={length}
        changeArrayLength={changeArrayLength}
        recoverArray={recoverArray}
        changeArrayInitialOrder={changeArrayInitialOrder}
        currentOption={currentOrder}
      />
      <SortControlBar
        handleSortStart={handleSortStart}
        sortInterval={sortInterval}
        changeSortInterval={changeSortInterval}
        changeSortAlgorithm={changeSortAlgorithm}
      />
    </div>
  );
};

export default ControlBar;
