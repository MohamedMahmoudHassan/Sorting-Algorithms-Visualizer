import React, { Component } from "react";
import "./App.css";
import Array from "./components/array";
import generateRandomElements from "./Util/generateRandomElements";

class App extends Component {
  state = { sortInterval: 0, sortAlgorithm: "", arrayElements: [] };

  constructor(){
    super();
    this.state = {
      sortInterval:10,
      sortAlgorithm: "selectionSort",
      arrayElements: generateRandomElements(50)
    }
  }

  render() {
    const {sortInterval, sortAlgorithm, arrayElements } = this.state;
    return (
      <div className="container">
        <h1>Sorting Algorithms Visualizer</h1>
        <Array sortInterval={sortInterval} sortAlgorithm={sortAlgorithm} elements={arrayElements} />
      </div>
    );
  }
}

export default App;
