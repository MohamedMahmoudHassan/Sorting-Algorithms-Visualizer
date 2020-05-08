export default function getSortStep(originalArr, operation, index1, index2) {
  const arr = JSON.parse(JSON.stringify(originalArr));

  if (operation === "compare") arr[index1].isInComparison = arr[index2].isInComparison = true;
  else arr[index1].isInSwap = arr[index2].isInSwap = true;

  return arr;
}
