import React from "react";

const Bar = ({ element, criticalValue }) => {
  const style = {
    width: 100,
    height: element.value,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: criticalValue - element.value,
    textAlign: "center",
    backgroundColor:
      element.isInCompare === true
        ? "yellow"
        : element.isInSwap === true
        ? "blue"
        : "white"
  };

  return <div style={style}>{element.value}</div>;
};

export default Bar;
