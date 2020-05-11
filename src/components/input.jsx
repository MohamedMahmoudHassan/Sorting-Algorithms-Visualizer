import React from "react";
import Slider from "./slider";

const Input = ({ label, handleUpdate, isSorting }) => {
  return (
    <div className="col-sm-6 col-lg-2">
      <div className="mb-2">
        <small className="text-uppercase font-weight-bold">{label}</small>
      </div>
      <Slider handleUpdate={handleUpdate} disabled={isSorting} />
    </div>
  );
};

export default Input;
