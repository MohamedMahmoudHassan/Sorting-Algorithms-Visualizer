import React from "react";
import ArrayBar from "./arrayBar";

const ArrayVisualizer = ({ onClick, elements }) => {
  const style = {
    height: 500,
    margin: "auto"
  };

  return (
    <div className="row" style={style} onClick={onClick}>
      <div className="row" style={{ margin: "auto" }}>
        {elements.map((element, index) => (
          <ArrayBar maxValue={500} element={element} barsNumber={elements.length} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;
