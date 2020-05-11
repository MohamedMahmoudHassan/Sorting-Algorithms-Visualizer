import React, { Component } from "react";
import ArrayVisualizer from "./components/arrayVisualizer";
import NavBar from "./components/navBar";
import ControlBar from "./components/controlBar";
import generateElements from "./Util/generateElements";
import sortWithSteps from "./Util/sortWithSteps";
import getFirstStep from "./Util/getFirstStep";

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
    const arrayElements = generateElements(initialOrder);
    this.state = {
      array: {
        elements: arrayElements,
        status: "unsorted",
        currentStepId: 0,
        sortSteps: getFirstStep(arrayElements, length),
        length,
        initialOrder
      },
      sortInterval: this.mapSliderToInterval(50),
      sortAlgorithm: "Bubble Sort"
    };
  }

  componentDidUpdate() {
    clearInterval(this.sortInterval);
    if (this.state.array.status === "sorting")
      this.sortInterval = setInterval(() => {
        this.applySortStep("forward");
      }, this.state.sortInterval);
  }

  updateArrayState = (arrayState, isWithRest) => {
    const array = { ...this.state.array };
    Object.keys(arrayState).forEach(key => (array[key] = arrayState[key]));
    if (isWithRest) {
      array.status = "unsorted";
      array.currentStepId = 0;
      array.sortSteps = getFirstStep(array.elements, array.length);
    }
    this.setState({ array });
  };

  applySortStep = type => {
    const array = { ...this.state.array };
    let { sortSteps, currentStepId, status } = array;
    if (status === "unsorted") return;

    if (type === "forward") {
      if (currentStepId + 1 === sortSteps.length) status = "sorted";
      else currentStepId++;
    } else if (currentStepId - 1 >= 0) {
      currentStepId--;
      status = "pausedSorting";
    }

    this.updateArrayState({ status, currentStepId });
  };

  startSort = () => {
    const array = { ...this.state.array };
    const { sortSteps, status } = array;
    const firstStep = sortSteps[0];
    if (status === "unsorted") {
      const sortSteps = [firstStep, ...sortWithSteps([...firstStep], this.state.sortAlgorithm)];
      this.updateArrayState({ status: "pausedSorting", sortSteps });
    }
  };

  runSort = () => {
    const array = { ...this.state.array };
    if (array.status === "pausedSorting") this.updateArrayState({ status: "sorting" });
  };

  pauseSort = () => {
    this.updateArrayState({ status: "pausedSorting" });
  };

  mapSliderToInterval = sliderValue => {
    return (100 - sliderValue) * 5;
  };

  updateSortInterval = sliderValue => {
    const sortInterval = this.mapSliderToInterval(sliderValue);
    this.setState({ sortInterval });
  };

  recoverArray = () => {
    this.updateArrayState({}, true);
  };

  generateNewArray = () => {
    const array = { ...this.state.array };
    const arrayElements = generateElements(array.initialOrder);
    this.updateArrayState({ elements: arrayElements }, true);
  };

  changeArrayProp = ({ currentTarget: input }) => {
    const array = { ...this.state.array };
    array[input.name] = input.value;
    this.setState({ array });
  };

  changeArrayLength = value => {
    const array = { ...this.state.array };
    let { status, length } = array;
    length = Math.max(value, 1);

    if (status === "unsorted") {
      this.updateArrayState({ length }, true);
    } else this.updateArrayState({ length });
  };

  changeSortProp = ({ currentTarget: input }) => {
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  render() {
    const { sortAlgorithm, array } = this.state;
    const { initialOrder, length } = array;
    return (
      <React.Fragment>
        <NavBar />
        <ArrayVisualizer
          elements={array.sortSteps[array.currentStepId]}
          runSort={this.runSort}
          pauseSort={this.pauseSort}
          applySortStep={this.applySortStep}
          updateSortInterval={this.updateSortInterval}
          recoverArray={this.recoverArray}
          isSorting={array.status === "sorting"}
          isBeforeSort={array.status !== "unsorted"}
        />
        <ControlBar
          generateNewArray={this.generateNewArray}
          arrayLength={length}
          currentOrder={initialOrder}
          changeArrayLength={this.changeArrayLength}
          recoverArray={this.recoverArray}
          changeArrayInitialOrder={this.changeArrayProp}
          startSort={this.startSort}
          changeSortAlgorithm={this.changeSortProp}
          currentAlgorithm={sortAlgorithm}
          isSorting={array.status === "sorting" || array.status === "pausedSorting"}
        />
      </React.Fragment>
    );
  }
}

export default App;
