import random from "./random";
import shuffleArray from "./../../shuffleArray";

export default function nearlySorted(length, min, max, arr) {
  if (!arr) arr = random(length, min, max);

  arr.sort(function(a, b) {
    return a.value - b.value;
  });

  return shuffleArray(arr, 0.15);
}
