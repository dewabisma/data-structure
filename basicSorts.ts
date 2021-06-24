// Bubble Sort
const bubbleSort = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

// Selection Sort
const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minValIndex = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minValIndex]) {
        minValIndex = j;
      }
    }

    if (i !== minValIndex) {
      const temp = array[i];
      array[i] = array[minValIndex];
      array[minValIndex] = temp;
    }
  }

  return array;
};

// Insertion Sort
const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; array[j] < array[j - 1] && j > 0; j--) {
      const temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
    }
  }

  return array;
};

let ar1 = [9, 5, 4, 3, 1];
console.log(bubbleSort(ar1));
console.log("BUBBLE SORT");

console.log(selectionSort(ar1));
console.log("SELECTION SORT");

console.log(insertionSort(ar1));
console.log("INSERTION SORT");
