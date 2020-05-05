import React, { Component } from "react";
import Bar from "./bar";

class Array extends Component {
  state = { length: 0, values: [] };

  constructor(props) {
    super(props);
    this.state = { length: 5, values: [140, 50, 120, 75, 100] };
  }

  style = {
    width: 700,
    height: 300,
    borderWidth: 1,
    borderStyle: "solid"
  };

  render() {
    return (
      <div className="row" style={this.style}>
        {this.state.values.map(value => (
          <Bar criticalValue={300} value={value} />
        ))}
      </div>
    );
  }
}

export default Array;
