import React from "react";

const Bar = ({ element, maxValue, barsNumber }) => {
  const colorsSchema = {
    normal: "#D5B588",
    isInCompare: "#CA625A",
    isInSwap: "#39274C"
  }

  const style = {
    width: 950 / barsNumber - 2,
    height: element.value,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: maxValue - element.value - 1,
    marginLeft: 2,
    textAlign: "center",
    backgroundColor:
      element.isInCompare === true
        ? colorsSchema.isInCompare
        : element.isInSwap === true
        ? colorsSchema.isInSwap
        : colorsSchema.normal
  };

  return <div style={style}></div>;
};

export default Bar;
