import React from "react";
import ArrayBar from "./arrayBar";

const ArrayVisualizer = ({ onClick, elements }) => {
  const style = {
    width: 1000,
    height: 500,
    borderWidth: 1,
    borderStyle: "solid"
  };

  return (
    <div className="row" style={style} onClick={onClick}>
      <div className="row" style={{ margin: "auto" }}>
        {elements.map(element => (
          <ArrayBar maxValue={500} element={element} barsNumber={elements.length} />
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;