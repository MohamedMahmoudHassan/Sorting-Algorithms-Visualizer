import bubbleSort from "./Algorithms/bubbleSort";
import selectionSort from "./Algorithms/selectionSort";
import mergeSort from "./Algorithms/mergeSort";

export default function sortWithSteps(arr, algorithm) {
  switch (algorithm) {
    case "bubbleSort":
      return bubbleSort(arr);
    case "selectionSort":
      return selectionSort(arr);
    case "mergeSort":
      return mergeSort(arr);
    default:
      return arr;
  }
}
