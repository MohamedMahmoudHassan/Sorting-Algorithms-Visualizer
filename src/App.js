import React, { Component } from "react";
import "./App.css";
import Array from "./components/array";
import generateRandomElements from "./Util/generateRandomElements";
import sortWithSteps from "./Util/sortWithSteps";

class App extends Component {
  state = {
    array: { elements: [], sortSteps: [], currentStepId: 0, status: "" },
    sortInterval: 0,
    sortAlgorithm: ""
  };

  constructor() {
    super();
    const arrayElements = generateRandomElements(15);
    this.state = {
      array: {
        elements: arrayElements,
        status: "unsorted",
        currentStepId: 0,
        sortSteps: [arrayElements]
      },
      sortInterval: 10,
      sortAlgorithm: "selectionSort"
    };
  }

  componentDidUpdate() {
    clearInterval(this.sortInterval);
    if (this.state.array.status === "sorting")
      this.sortInterval = setInterval(() => {
        this.handleStatusUpdate();
      }, this.state.sortInterval);
  }

  updateArrayState = arrayState => {
    const array = { ...this.state.array };
    Object.keys(arrayState).forEach(key => (array[key] = arrayState[key]));
    this.setState({ array });
  };

  handleStatusUpdate = () => {
    let { sortSteps, currentStepId, status } = this.state.array;
    if (currentStepId + 1 === sortSteps.length) {
      status = "sorted";
    } else currentStepId++;

    this.updateArrayState({ status, currentStepId });
  };

  handleSortStart = () => {
    const { elements, status } = this.state.array;
    if (status === "unsorted") {
      const sortSteps = [elements, ...sortWithSteps([...elements], this.state.sortAlgorithm)];
      this.updateArrayState({ status: "sorting", sortSteps });
    }
  };

  render() {
    const { sortInterval, sortAlgorithm, array } = this.state;
    return (
      <div className="container">
        <h1>Sorting Algorithms Visualizer</h1>
        <Array
          sortInterval={sortInterval}
          sortAlgorithm={sortAlgorithm}
          onClick={this.handleSortStart}
          elements={array.sortSteps[array.currentStepId]}
        />
      </div>
    );
  }
}

export default App;
