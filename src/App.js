import React from "react";
import "./App.css";
import Array from "./components/array";

function App() {
  return (
    <div className="container">
      <h1>Sorting Algorithms Visualizer</h1>
      <Array sortInterval={100} />
    </div>
  );
}

export default App;
