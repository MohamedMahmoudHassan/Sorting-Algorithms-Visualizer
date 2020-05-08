import React from "react";
import ActionButton from "./actionButton";

const SortControlBar = ({ handleSortStart }) => {
  return (
    <div>
      <ActionButton label="Sort" handleClick={handleSortStart} style={{ marginTop: 5 }} />
    </div>
  );
};

export default SortControlBar;
