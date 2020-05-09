export default function shuffleArray(arr, prob) {
  const length = arr.length;
  for (var i = 0; i < length; i++) {
    const randProb = Math.random();
    if (randProb <= prob) {
      const randIndex = Math.floor(Math.random() * (length - 1 - i)) + i;
      [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
    }
  }
  return arr;
}
