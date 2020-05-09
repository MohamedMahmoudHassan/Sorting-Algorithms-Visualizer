export default function random(length, min, max) {
  let values = [];
  while (length--) {
    values.push({
      value: Math.floor(Math.random() * (max - min)) + min,
      isInComparison: false,
      isInSwap: false
    });
  }
  return values;
}
