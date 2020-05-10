import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";
import Select from "./select";
import { initialOrdersList } from "./../Util/algorithmsLists";

const ArrayControlBar = ({
  arrayLength,
  generateNewArray,
  changeArrayLength,
  changeArrayInitialOrder,
  currentOption,
  isSorting
}) => {
  return (
    <div className="row">
      <Input name="length" label="Array Length" value={arrayLength} onChange={changeArrayLength} />
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
