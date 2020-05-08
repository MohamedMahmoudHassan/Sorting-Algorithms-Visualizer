import React from "react";
import ArrayBar from "./arrayBar";

const Array = ({ onClick, elements }) => {
  const style = {
    width: 1000,
    height: 500,
    borderWidth: 1,
    borderStyle: "solid"
  };

  return (
    <div className="row" style={style} onClick={onClick}>
      {elements.map(element => (
        <ArrayBar maxValue={500} element={element} barsNumber={elements.length} />
      ))}
    </div>
  );
};

export default Array;
