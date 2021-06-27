const swap = (array: number[], indexItem1: number, indexItem2: number) => {
  const temp = array[indexItem1];
  array[indexItem1] = array[indexItem2];
  array[indexItem2] = temp;
};

const pivot = (
  array: number[],
  pivotIndex = 0,
  endIndex = array.length - 1
) => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;

      swap(array, swapIndex, i);
    }
  }

  swap(array, swapIndex, pivotIndex);

  return swapIndex;
};

// When even number it will break if base case using equal
const quickSorts = (array: number[], left = 0, right = array.length - 1) => {
  if (left < right) {
    const swapIndex = pivot(array, left, right);

    quickSorts(array, left, swapIndex - 1);
    quickSorts(array, swapIndex + 1, right);
  }

  return array;
};

let myArray = [4, 6, 1, 5, 2];

console.log(quickSorts(myArray));
