import getSortStep from "../../getSortStep";

export default function insertionSort(arr) {
  let sortSteps = [];
  const length = arr.length;

  for (var i = 1; i < length; i++) {
    let swapIds = [];
    let j = i - 1;
    const toInsert = arr[i];
    swapIds.push(i);

    while (j >= 0) {
      sortSteps.push(getSortStep(arr, "compare", [i, j]));
      if (arr[j].value <= toInsert.value) break;
      swapIds.push(j);
      j--;
    }
    j = i - 1;
    while (j >= 0 && arr[j].value > toInsert.value) arr[j + 1] = arr[j--];
    arr[j + 1] = toInsert;

    sortSteps.push(getSortStep(arr, "sort", swapIds));
  }

  sortSteps.push(arr);
  return sortSteps;
}
