import React from "react";
import ActionButton from "./actionButton";
import Select from "./select";
import { sortAlgorithmsList } from "../Util/algorithmsLists";

const SortControlBar = ({ startSort, changeSortAlgorithm, currentOption, isSorting }) => {
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <Select
        name="sortAlgorithm"
        label="Sort Algorithm"
        options={sortAlgorithmsList}
        onChange={changeSortAlgorithm}
        currentOption={currentOption}
        isSorting={isSorting}
      />
      <ActionButton label="Sort" handleClick={startSort} isSorting={isSorting} />
    </div>
  );
};

export default SortControlBar;
