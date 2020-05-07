export default function generateRandomElements(length) {
  let values = [];
  while (length--) {
    values.push({
      value: Math.floor(Math.random(1) * 200 + 40),
      isInComparison: false,
      isInSwap: false
    });
  }
  return values;
}
