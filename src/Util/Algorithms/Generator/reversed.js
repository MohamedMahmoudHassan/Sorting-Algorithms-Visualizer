import random from "./random";

export default function reversed(length, min, max) {
  let values = random(length, min, max);
  values.sort(function(a, b) {
    return b.value - a.value;
  });
  return values;
}
