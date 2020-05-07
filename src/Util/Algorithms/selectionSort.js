export default function selectionSort(arr) {
  let sortSteps = [];
  const length = arr.length;
  let c = 0;
  let minIndex;

  for (var i = 0; i < length - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < length; j++) {
      sortSteps.push({ id: c++, el1: minIndex, el2: j, type: "compare" });
      if (arr[j].value < arr[minIndex].value) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    sortSteps.push({ id: c++, el1: i, el2: minIndex, type: "swap" });
  }
  return sortSteps;
}
