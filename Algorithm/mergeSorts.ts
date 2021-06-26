const merge = (array1: number[], array2: number[]) => {
  let combinedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combinedArray.push(array1[i]);
      i++;
    } else {
      combinedArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combinedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combinedArray.push(array2[j]);
    j++;
  }

  return combinedArray;
};

const mergeSort = (array: number[]): number[] => {
  let mid = Math.ceil(array.length / 2);
  let partA: number[] = array.slice(0, mid);
  let partB: number[] = array.slice(mid);

  if (partA.length <= 1 && partB.length <= 1) {
    return merge(partA, partB);
  } else {
    return merge(mergeSort(partA), mergeSort(partB));
  }
};

const x = [1, 3, 5, 7, 8, 12];
const y = [2, 4, 9, 11];
console.log(merge(x, y));
console.log("MERGE FUNCTION");

const z = [9, 1, 5, 4, 3, 11, 10, 8, 8, 3, 2];
console.log(mergeSort(z));
console.log("MERGE SORT FUNCTION");
