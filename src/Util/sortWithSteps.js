import bubbleSort from "./Algorithms/Sorting/bubbleSort";
import selectionSort from "./Algorithms/Sorting/selectionSort";
import mergeSort from "./Algorithms/Sorting/mergeSort";
import insertionSort from './Algorithms/Sorting/insertionSort';

export default function sortWithSteps(arr, algorithm) {
  switch (algorithm) {
    case "Bubble Sort":
      return bubbleSort(arr);
    case "Selection Sort":
      return selectionSort(arr);
    case "Merge Sort":
      return mergeSort(arr);
    case "Insertion Sort":
      return insertionSort(arr);
    default:
      return arr;
  }
}
