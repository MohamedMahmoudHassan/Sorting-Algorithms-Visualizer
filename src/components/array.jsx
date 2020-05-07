import React, { Component } from "react";
import Bar from "./bar";
import sortWithSteps from "./../Util/sortWithSteps";

class Array extends Component {
  state = { elements: [], sortSteps: {}, status: {} };

  constructor(props) {
    super(props);
    this.state = {
      elements: this.props.elements,
      status: "unsorted"
    };
  }

  componentDidMount() {
    const stepsList = sortWithSteps([...this.state.elements], this.props.sortAlgorithm);
    const sortSteps = {
      stepsList,
      currentStep: stepsList[0]
    };
    this.setState({ sortSteps });
  }

  componentDidUpdate(prevProps, prevState) {
    clearInterval(this.sortInterval);
    if (this.state.status === "unsorted" || prevState.status === "sorted") return;

    this.sortInterval = setInterval(() => {
      this.handleStatusUpdate(prevState.status, prevState.sortSteps.currentStep);
    }, this.props.sortInterval);
  }

  applyStepEffect = (elements, type) => {
    if (type === "swap") {
      [elements[0], elements[1]] = [elements[1], elements[0]];
      elements[0].isInSwap = elements[1].isInSwap = true;
    } else elements[0].isInCompare = elements[1].isInCompare = true;
    return elements;
  };

  clearStepEffect = elements => {
    elements[0].isInCompare = elements[1].isInCompare = false;
    elements[0].isInSwap = elements[1].isInSwap = false;
    return elements;
  };

  handleStatusUpdate = (prevStatus, prevStep) => {
    const elements = [...this.state.elements];
    const sortSteps = { ...this.state.sortSteps };
    let { currentStep } = sortSteps;
    let currentStatus = this.state.status;

    if (prevStatus === "sorting")
      [elements[prevStep.el1], elements[prevStep.el2]] = this.clearStepEffect([
        elements[prevStep.el1],
        elements[prevStep.el2]
      ]);

    if (currentStatus === "sorting") {
      [elements[currentStep.el1], elements[currentStep.el2]] = this.applyStepEffect(
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
    height: 500,
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
          <Bar criticalValue={500} element={element} />
        ))}
      </div>
    );
  }
}

export default Array;
