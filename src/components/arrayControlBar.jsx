import React from "react";
import ActionButton from "./actionButton";
import Input from "./input";
import Select from "./select";
import { initialOrdersList } from "./../Util/algorithmsLists";

const ArrayControlBar = ({
  arrayLength,
  generateNewArray,
  changeArrayLength,
  recoverArray,
  changeArrayInitialOrder
}) => {
  return (
    <div>
      <Input
        name="length"
        label="Array Length"
        value={arrayLength}
        style={{ width: 100 }}
        onChange={changeArrayLength}
      />
      <Select
        name="initialOrder"
        label="Array Initial Order"
        options={initialOrdersList}
        style={{ width: 300 }}
        onChange={changeArrayInitialOrder}
      />
      <ActionButton
        label="Generate New Array"
        handleClick={generateNewArray}
        style={{ marginTop: 5 }}
      />
      <ActionButton
        label="Recover Array"
        handleClick={recoverArray}
        style={{ marginTop: 5, marginLeft: 5 }}
      />
    </div>
  );
};

export default ArrayControlBar;
