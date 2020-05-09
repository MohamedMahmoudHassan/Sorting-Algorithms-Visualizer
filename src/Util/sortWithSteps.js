import bubbleSort from "./Algorithms/bubbleSort";
import selectionSort from "./Algorithms/selectionSort";
import mergeSort from "./Algorithms/mergeSort";

export default function sortWithSteps(arr, algorithm) {
  switch (algorithm) {
    case "Bubble Sort":
      return bubbleSort(arr);
    case "Selection Sort":
      return selectionSort(arr);
    case "Merge Sort":
      return mergeSort(arr);
    default:
      return arr;
  }
}
