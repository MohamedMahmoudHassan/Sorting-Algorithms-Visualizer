import React from "react";
import ArrayControlBar from "./arrayControlBar";
import SortControlBar from "./sortControlBar";

const ControlBar = ({
  generateNewArray,
  length,
  changeArrayLength,
  recoverArray,
  changeArrayInitialOrder,
  handleSortStart,
  sortInterval,
  changeSortInterval,
  changeSortAlgorithm
}) => {
  return (
    <div class="py-5 bg-secondary">
      <ArrayControlBar
        generateNewArray={generateNewArray}
        length={length}
        changeArrayLength={changeArrayLength}
        recoverArray={recoverArray}
        changeArrayInitialOrder={changeArrayInitialOrder}
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
