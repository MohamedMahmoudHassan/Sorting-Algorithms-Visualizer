import bubbleSort from "./Algorithms/bubbleSort";
import selectionSort from "./Algorithms/selectionSort";

export default function sortWithSteps(arr, algorithm) {
  switch (algorithm) {
    case "bubbleSort":
      return bubbleSort(arr);
    case "selectionSort":
      return selectionSort(arr);
    default:
      return arr;
  }
}
