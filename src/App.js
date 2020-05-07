import React from "react";
import "./App.css";
import Array from "./components/array";
import generateRandomElements from "./Util/generateRandomElements";

function App() {
  const arrayElements = generateRandomElements(50);

  return (
    <div className="container">
      <h1>Sorting Algorithms Visualizer</h1>
      <Array sortInterval={5} sortAlgorithm="selectionSort" elements={arrayElements} />
    </div>
  );
}

export default App;
