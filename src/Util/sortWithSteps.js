import bubbleSort from "./Algorithms/Sorting/bubbleSort";
import selectionSort from "./Algorithms/Sorting/selectionSort";
import mergeSort from "./Algorithms/Sorting/mergeSort";
import insertionSort from "./Algorithms/Sorting/insertionSort";
import quickSort from "./Algorithms/Sorting/quickSort";
import heapSort from "./Algorithms/Sorting/heapSort";

export default function sortWithSteps(arr, algorithm) {
  switch (algorithm) {
    case "Bubble Sort":
      return bubbleSort(arr);
    case "Selection Sort":
      return selectionSort(arr);
    case "Insertion Sort":
      return insertionSort(arr);
    case "Merge Sort":
      return mergeSort(arr);
    case "Quick Sort":
      return quickSort(arr);
    case "Heap Sort":
      return heapSort(arr);
    default:
      return arr;
  }
}
