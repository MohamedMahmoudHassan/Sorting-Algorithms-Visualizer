import getSortStep from "./../getSortStep";

export default function selectionSort(arr) {
  let sortSteps = [];
  const length = arr.length;
  let minIndex;

  for (var i = 0; i < length - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < length; j++) {
      sortSteps.push(getSortStep(arr, "compare", minIndex, j));
      if (arr[j].value < arr[minIndex].value) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    sortSteps.push(getSortStep(arr, "swap", i, minIndex));
  }

  sortSteps.push(arr);
  return sortSteps;
}
