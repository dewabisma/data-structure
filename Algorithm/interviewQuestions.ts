const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 6, 7, 8, 9];

let obj: {
  [key: number]: number;
} = {};

const arraysHaveSameItem = (array1: number[], array2: number[]) => {
  array1.forEach((val) => {
    obj[val] = val;
  });

  for (let i = 0; i < array2.length; i++) {
    if (obj[array2[i]]) return true;
  }

  return false;
};

console.log(arraysHaveSameItem(arr1, arr2));
