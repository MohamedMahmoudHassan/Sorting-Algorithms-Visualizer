import randomGenerator from "./Algorithms/Elements Generator/randomGenerator";

export default function generateElements(length, type, min = 5, max = 400) {
  if (type === "Random") return randomGenerator(length, min, max);
}
