export default function generateRandomElements(length) {
  let values = [];
  while (length--) {
    values.push({
      value: Math.floor(Math.random(1) * 200 + 40),
      comparisonElement: false
    });
  }
  return values;
}
