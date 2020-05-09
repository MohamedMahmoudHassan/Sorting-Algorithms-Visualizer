import getSortStep from "../../getSortStep";

export default function bubbleSort(arr) {
  let sortSteps = [];
  const length = arr.length;

  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      sortSteps.push(getSortStep(arr, "compare", [j, j + 1]));
      if (arr[j + 1].value < arr[j].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sortSteps.push(getSortStep(arr, "swap", [j, j + 1]));
      }
    }
  }

  sortSteps.push(arr);
  return sortSteps;
}
