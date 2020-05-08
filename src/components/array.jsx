import React, { Component } from "react";
import Bar from "./bar";

class Array extends Component {
  style = {
    width: 1000,
    height: 500,
    borderWidth: 1,
    borderStyle: "solid"
  };

  render() {
    return (
      <div className="row" style={this.style} onClick={this.props.onClick}>
        {this.props.elements.map(element => (
          <Bar maxValue={500} element={element} barsNumber={this.props.elements.length} />
        ))}
      </div>
    );
  }
}

export default Array;
