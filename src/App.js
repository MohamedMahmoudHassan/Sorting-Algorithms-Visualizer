import React from "react";
import "./App.css";
import Array from "./components/array";

function App() {
  return (
    <div className="container">
      <h1>Sorting Algorithms Visualizer</h1>
      <Array sortInterval={50} sortAlgorithm="selectionSort" />
    </div>
  );
}

export default App;
