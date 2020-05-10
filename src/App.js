import React, { Component } from "react";
import "./App.css";
import ArrayVisualizer from "./components/arrayVisualizer";
import NavBar from "./components/navBar";
import ControlBar from "./components/controlBar";
import generateElements from "./Util/generateElements";
import sortWithSteps from "./Util/sortWithSteps";

class App extends Component {
  state = {
    array: {
      elements: [],
      sortSteps: [],
      currentStepId: 0,
      status: "",
      length: 0,
      initialOrder: ""
    },
    sortInterval: 0,
    sortAlgorithm: ""
  };

  constructor() {
    super();
    const length = 50;
    const initialOrder = "Random";
    const arrayElements = generateElements(length, initialOrder);
    this.state = {
      array: {
        elements: arrayElements,
        status: "unsorted",
        currentStepId: 0,
        sortSteps: [arrayElements],
        length,
        initialOrder
      },
      sortInterval: 50,
      sortAlgorithm: "Bubble Sort"
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

  recoverArray = () => {
    const array = { ...this.state.array };
    array.status = "unsorted";
    array.currentStepId = 0;
    this.setState({ array });
  };

  generateNewArray = () => {
    let array = { ...this.state.array };
    const { length, initialOrder } = array;
    const arrayElements = generateElements(length, initialOrder);
    array = {
      elements: arrayElements,
      status: "unsorted",
      currentStepId: 0,
      sortSteps: [arrayElements],
      length,
      initialOrder
    };
    this.setState({ array });
  };

  changeArrayProp = ({ currentTarget: input }) => {
    const array = { ...this.state.array };
    array[input.name] = input.value;
    this.setState({ array });
  };

  changeSortProp = ({ currentTarget: input }) => {
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  render() {
    const { sortInterval, sortAlgorithm, array } = this.state;
    const { initialOrder } = array;
    return (
      <div>
        <NavBar />
        <ArrayVisualizer
          sortInterval={sortInterval}
          sortAlgorithm={sortAlgorithm}
          elements={array.sortSteps[array.currentStepId]}
        />
        <ControlBar
          generateNewArray={this.generateNewArray}
          arrayLength={array.length}
          currentOrder={initialOrder}
          changeArrayLength={this.changeArrayProp}
          recoverArray={this.recoverArray}
          changeArrayInitialOrder={this.changeArrayProp}
          handleSortStart={this.handleSortStart}
          changeSortAlgorithm={this.changeSortProp}
          currentAlgorithm={sortAlgorithm}
        />
      </div>
    );
  }
}

export default App;
