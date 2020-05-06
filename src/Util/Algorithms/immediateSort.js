export default function immediateSort(arr) {
  arr.sort(function(a, b) {
    return a.value - b.value;
  });
  return arr;
}
