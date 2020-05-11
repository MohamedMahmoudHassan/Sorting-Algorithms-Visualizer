import React from "react";
import Slider from "./slider";
import SectionTitle from "./sectionTitle";

const Input = ({ label, handleUpdate, isSorting }) => {
  return (
    <div className="col-sm-6 col-lg-2">
      <SectionTitle label={label} />
      <Slider handleUpdate={handleUpdate} disabled={isSorting} />
    </div>
  );
};

export default Input;
