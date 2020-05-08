export default function getSortStep(originalArr, operation, elementsInOperation) {
  const arr = JSON.parse(JSON.stringify(originalArr));

  elementsInOperation.forEach(id => {
    if (operation === "compare") arr[id].isInComparison = true;
    else arr[id].isInSwap = true;
  });

  return arr;
}
