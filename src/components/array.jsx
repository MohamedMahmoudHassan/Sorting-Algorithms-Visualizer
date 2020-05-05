import React, { Component } from "react";
import Bar from "./bar";
import generateRandomValues from "../Util/generateRandomValues";
import immediateSort from "./../Util/Algorithms/immediateSort";

class Array extends Component {
  state = { length: 0, values: [] };

  constructor(props) {
    super(props);
    this.state = { length: 5, values: generateRandomValues(5) };
  }

  style = {
    width: 700,
    height: 300,
    borderWidth: 1,
    borderStyle: "solid"
  };

  handleClick = () => {
    const values = immediateSort(this.state.values);
    this.setState({ values });
  };

  render() {
    return (
      <div className="row" style={this.style} onClick={this.handleClick}>
        {this.state.values.map(value => (
          <Bar criticalValue={300} value={value} />
        ))}
      </div>
    );
  }
}

export default Array;
