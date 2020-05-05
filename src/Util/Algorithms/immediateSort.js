export default function immediateSort(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array;
}
