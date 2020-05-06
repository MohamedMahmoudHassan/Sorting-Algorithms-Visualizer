import React, { Component } from "react";
import Bar from "./bar";
import generateRandomElements from "../Util/generateRandomElements";
import immediateSort from "./../Util/Algorithms/immediateSort";

class Array extends Component {
  state = { elements: [], sortSteps: {}, status: {} };

  constructor(props) {
    super(props);
    this.state = {
      elements: generateRandomElements(9),
      status: "unsorted"
    };
  }

  style = {
    width: 1000,
    height: 300,
    borderWidth: 1,
    borderStyle: "solid"
  };

  handleClick = () => {
    const status = this.state.status;
    if (status === "unsorted") this.setState({ status: "sorting" });
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
