import React from "react";
import ActionButton from "./actionButton";
import Select from "./select";
import { sortAlgorithmsList } from "../Util/algorithmsLists";

const SortControlBar = ({ handleSortStart, changeSortAlgorithm, currentOption }) => {
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <Select
        name="sortAlgorithm"
        label="Sort Algorithm"
        options={sortAlgorithmsList}
        onChange={changeSortAlgorithm}
        currentOption={currentOption}
      />
      <ActionButton label="Sort" handleClick={handleSortStart} />
    </div>
  );
};

export default SortControlBar;
