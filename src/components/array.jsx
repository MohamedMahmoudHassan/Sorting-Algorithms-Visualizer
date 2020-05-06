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
    const stepsList = bubbleSort([...this.state.elements]);
    const sortSteps = {
      stepsList,
      currentStep: stepsList[0]
    };
    this.setState({ sortSteps });
  }

  componentDidUpdate(prevProps, prevState) {
    clearInterval(this.sortInterval);
    if (this.state.status === "unsorted" || prevState.status === "sorted")
      return;
    this.sortInterval = setInterval(() => {
      this.handleStatusUpdate(
        prevState.status,
        prevState.sortSteps.currentStep
      );
    }, 50);
  }

  applyStepEffect = (elements, type) => {
    if (type === "swap")
      [elements[0], elements[1]] = [elements[1], elements[0]];
    return elements;
  };

  handleStatusUpdate = (prevStatus, prevStep) => {
    const elements = [...this.state.elements];
    const { sortSteps } = this.state;
    let { currentStep } = sortSteps;
    let currentStatus = this.state.status;

    if (currentStatus === "sorting") {
      [
        elements[currentStep.el1],
        elements[currentStep.el2]
      ] = this.applyStepEffect(
        [elements[currentStep.el1], elements[currentStep.el2]],
        currentStep.type
      );

      if (currentStep.id + 1 === sortSteps.stepsList.length) {
        currentStep = {};
        currentStatus = "sorted";
      } else currentStep = sortSteps.stepsList[currentStep.id + 1];

      sortSteps.currentStep = currentStep;
    }

    this.setState({ elements, status: currentStatus, sortSteps });
  };

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
