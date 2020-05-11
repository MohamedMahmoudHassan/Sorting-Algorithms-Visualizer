import React from "react";

const SectionTitle = ({ label }) => {
  return (
    <div className="mb-3">
      <small className="text-uppercase font-weight-bold">{label}</small>
    </div>
  );
};

export default SectionTitle;
