import React, { Component } from "react";

const Bar = ({ value, criticalValue }) => {
  const style = {
    width: 100,
    height: value,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: criticalValue - value
  };

  return <div style={style}>{value}</div>;
};

export default Bar;
