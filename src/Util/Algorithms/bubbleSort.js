export default function bubbleSort(arr) {
  let sortSteps = [];
  const length = arr.length;
  let c = 0;

  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - 1; j++) {
      sortSteps.push({ id: c++, el1: j, el2: j + 1, type: "compare" });
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sortSteps.push({ id: c++, el1: j, el2: j + 1, type: "swap" });
      }
    }
  }
  return sortSteps;
}
