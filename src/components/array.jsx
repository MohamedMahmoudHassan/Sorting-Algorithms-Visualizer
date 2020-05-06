import React, { Component } from "react";
import Bar from "./bar";
import generateRandomElements from "../Util/generateRandomElements";
import immediateSort from "./../Util/Algorithms/immediateSort";

class Array extends Component {
  state = { length: 0, elements: [] };

  constructor(props) {
    super(props);
    this.state = { length: 9, elements: generateRandomElements(9) };
  }

  style = {
    width: 1000,
    height: 300,
    borderWidth: 1,
    borderStyle: "solid"
  };

  handleClick = () => {
    const elements = immediateSort(this.state.elements);
    this.setState({ elements });
  };

  render() {
    return (
      <div className="row" style={this.style} onClick={this.handleClick}>
        {this.state.elements.map(element => (
          <Bar criticalValue={300} element={element} />
        ))}
      </div>
    );
  }
}

export default Array;
