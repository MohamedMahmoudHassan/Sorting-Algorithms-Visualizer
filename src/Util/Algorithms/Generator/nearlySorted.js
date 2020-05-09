import random from "./random";
import shuffleArray from "./../../shuffleArray";

export default function nearlySorted(length, min, max) {
  let values = random(length, min, max);
  values.sort(function(a, b) {
    return a.value - b.value;
  });

  return shuffleArray(values, 0.15);
}
