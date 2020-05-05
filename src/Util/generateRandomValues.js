export default function generateRandomValues(length) {
  let values = [];
  while (length--) {
    values.push(Math.floor(Math.random(1) * 200 + 40));
  }
  return values;
}
