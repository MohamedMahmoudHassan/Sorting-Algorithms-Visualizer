import random from "./random";

export default function reversed(length, min, max, arr) {
  if (!arr) arr = random(length, min, max);
  arr.sort(function(a, b) {
    return b.value - a.value;
  });
  return arr;
}
