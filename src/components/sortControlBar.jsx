import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";

const SortControlBar = ({ sortInterval, handleSortStart, changeSortInterval }) => {
  return (
    <div>
      <Input
        name="sortInterval"
        label="Sort Interval"
        value={sortInterval}
        style={{ width: 100 }}
        onChange={changeSortInterval}
      />
      <ActionButton label="Sort" handleClick={handleSortStart} style={{ marginTop: 5 }} />
    </div>
  );
};

export default SortControlBar;
