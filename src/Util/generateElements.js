import random from "./Algorithms/Generator/random";
import reversed from "./Algorithms/Generator/reversed";

export default function generateElements(length, type, min = 5, max = 400) {
  if (type === "Random") return random(length, min, max);
  if (type === "Reversed") return reversed(length, min, max);
}
