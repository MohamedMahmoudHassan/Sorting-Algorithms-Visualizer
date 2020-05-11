import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";
import Select from "./select";
import { initialOrdersList } from "./../Util/algorithmsLists";

const ArrayControlBar = ({
  generateNewArray,
  changeArrayLength,
  changeArrayInitialOrder,
  currentOption,
  isSorting
}) => {
  return (
    <div className="row">
      <Input label="Array Length" handleUpdate={changeArrayLength} isSorting={isSorting} />
      <Select
        name="initialOrder"
        label="Array Initial Order"
        options={initialOrdersList}
        onChange={changeArrayInitialOrder}
        currentOption={currentOption}
        isSorting={isSorting}
      />
      <ActionButton
        label="Generate New Array"
        handleClick={generateNewArray}
        isSorting={isSorting}
      />
    </div>
  );
};

export default ArrayControlBar;
