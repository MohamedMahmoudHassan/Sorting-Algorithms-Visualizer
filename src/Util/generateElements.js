import random from "./Algorithms/Generator/random";
import reversed from "./Algorithms/Generator/reversed";

export default function generateElements(length, initialOrder, min = 5, max = 400) {
  if (initialOrder === "Random") return random(length, min, max);
  if (initialOrder === "Reversed") return reversed(length, min, max);
}
