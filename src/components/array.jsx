import React, { Component } from "react";
import Bar from "./bar";
import sortWithSteps from "./../Util/sortWithSteps";

class Array extends Component {
  state = { elements: [], sortSteps: [], currentStepId: 0, status: "" };

  constructor(props) {
    super(props);
    this.state = {
      elements: this.props.elements,
      status: "unsorted",
      currentStepId: 0,
      sortSteps: [this.props.elements]
    };
  }

  componentDidUpdate() {
    clearInterval(this.sortInterval);
    if (this.state.status !== "sorting") return;

    this.sortInterval = setInterval(() => {
      this.handleStatusUpdate();
    }, this.props.sortInterval);
  }

  handleStatusUpdate = () => {
    let { sortSteps, currentStepId, status } = this.state;

    if (status === "sorting") {
      if (currentStepId + 1 === sortSteps.length) {
        status = "sorted";
      } else currentStepId++;
    }

    this.setState({ status, currentStepId });
  };

  style = {
    width: 1000,
    height: 500,
    borderWidth: 1,
    borderStyle: "solid"
  };

  handleClick = () => {
    const status = this.state.status;
    if (status === "unsorted") {
      const sortSteps = [
        this.state.elements,
        ...sortWithSteps([...this.state.elements], this.props.sortAlgorithm)
      ];
      this.setState({ status: "sorting", sortSteps });
    }
  };

  render() {
    const { sortSteps, currentStepId } = this.state;
    return (
      <div className="row" style={this.style} onClick={this.handleClick}>
        {sortSteps[currentStepId].map(element => (
          <Bar maxValue={500} element={element} barsNumber={this.state.elements.length} />
        ))}
      </div>
    );
  }
}

export default Array;
