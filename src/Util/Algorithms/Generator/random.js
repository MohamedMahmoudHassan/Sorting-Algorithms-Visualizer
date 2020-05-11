import shuffleArray from "./../../shuffleArray";

export default function random(length, min, max, arr) {
  if (!arr) {
    let values = [];
    while (length--) {
      values.push({
        value: Math.floor(Math.random() * (max - min)) + min,
        isInComparison: false,
        isInSwap: false
      });
    }
    arr = values;
  }
  return shuffleArray(arr);
}
