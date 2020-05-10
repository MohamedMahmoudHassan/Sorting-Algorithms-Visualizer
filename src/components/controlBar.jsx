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
  sortInterval,
  changeSortInterval,
  changeSortAlgorithm
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
        />
        <SortControlBar
          handleSortStart={handleSortStart}
          sortInterval={sortInterval}
          changeSortInterval={changeSortInterval}
          changeSortAlgorithm={changeSortAlgorithm}
        />
      </div>
    </div>
  );
};

export default ControlBar;
