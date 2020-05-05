import React, { Component } from "react";

class Bar extends Component {
  state = { value: 0 };

  style = {
    width: 100,
    height: this.props.value,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: this.props.criticalValue - this.props.value
  };

  render() {
    return <div style={this.style}>{this.props.value}</div>;
  }
}

export default Bar;
