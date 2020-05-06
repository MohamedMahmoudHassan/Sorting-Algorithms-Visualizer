import React, { Component } from "react";
import Bar from "./bar";
import generateRandomElements from "../Util/generateRandomElements";
import immediateSort from "./../Util/Algorithms/immediateSort";
import bubbleSort from "./../Util/Algorithms/bubbleSort";

class Array extends Component {
  state = { elements: [], sortSteps: {}, status: {} };

  constructor(props) {
    super(props);
    this.state = {
      elements: generateRandomElements(9),
      status: "unsorted"
    };
  }

  componentDidMount() {
    const sortSteps = {
      stepsList: bubbleSort(this.state.elements),
      currentStep: 0
    };
    this.setState({ sortSteps });
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
