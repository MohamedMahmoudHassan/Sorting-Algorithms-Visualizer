import React from "react";

const ArrayBar = ({ element, maxValue, barsNumber }) => {
  const colorsSchema = {
    normal: "#f5365c",
    isInComparison: "#32325d",
    isInSwap: "#2dce89"
  };

  const style = {
    width: 950 / Math.max(barsNumber, 8) - 2,
    height: element.value,
    marginTop: maxValue - element.value - 3,
    marginLeft: 2,
    textAlign: "center",
    color: "white",
    fontSize: 400 / Math.max(barsNumber, 8),
    backgroundColor:
      element.isInComparison === true
        ? colorsSchema.isInComparison
        : element.isInSwap === true
        ? colorsSchema.isInSwap
        : colorsSchema.normal
  };

  return <div style={style}>{element.value - 59}</div>;
};

export default ArrayBar;
