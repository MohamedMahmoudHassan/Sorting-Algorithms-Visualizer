import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";
import Select from "./select";
import { sortAlgorithmsList } from "../Util/algorithmsLists";

const SortControlBar = ({
  sortInterval,
  handleSortStart,
  changeSortInterval,
  changeSortAlgorithm
}) => {
  return (
    <div>
      <Input
        name="sortInterval"
        label="Sort Interval"
        value={sortInterval}
        style={{ width: 100 }}
        onChange={changeSortInterval}
      />
      <Select
        name="sortAlgorithm"
        label="Sort Algorithm"
        options={sortAlgorithmsList}
        style={{ width: 300 }}
        onChange={changeSortAlgorithm}
      />
      <ActionButton label="Sort" handleClick={handleSortStart} style={{ marginTop: 5 }} />
    </div>
  );
};

export default SortControlBar;
