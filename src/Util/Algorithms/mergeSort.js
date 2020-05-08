import getSortStep from "../getSortStep";

class MergeSortArray {
  constructor(arr) {
    this.arr = arr;
    this.sortSteps = [];
  }

  merge = function(st1, en1, st2, en2) {
    const arr = this.arr;
    let swapIds = [];
    let mergeArr = [...arr];
    let id = st1;
    let id1 = st1;
    let id2 = st2;

    for (var i = st1; i <= en2; i++) swapIds.push(i);

    while (id1 <= en1 && id2 <= en2) {
      this.sortSteps.push(getSortStep(arr, "compare", [id1, id2]));
      if (arr[id1].value <= arr[id2].value) mergeArr[id++] = arr[id1++];
      else mergeArr[id++] = arr[id2++];
    }
    while (id1 <= en1) {
      this.sortSteps.push(getSortStep(arr, "compare", [id1]));
      mergeArr[id++] = arr[id1++];
    }
    while (id2 <= en2) {
      this.sortSteps.push(getSortStep(arr, "compare", [id2]));
      mergeArr[id++] = arr[id2++];
    }

    this.arr = [...mergeArr];
    this.sortSteps.push(getSortStep(this.arr, "sort", swapIds));
  };

  mergeSort = function(st, en) {
    const mid = Math.floor((st + en) / 2);
    if (st < en) {
      this.mergeSort(st, mid);
      this.mergeSort(mid + 1, en);
      this.merge(st, mid, mid + 1, en);
    }
  };
}

export default function mergeSort(arr) {
  const mergeArr = new MergeSortArray(arr);
  mergeArr.mergeSort(0, arr.length - 1);
  return [...mergeArr.sortSteps, mergeArr.arr];
}
