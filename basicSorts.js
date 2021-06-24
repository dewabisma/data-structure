"use strict";
// Bubble Sort
var bubbleSort = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};
// Selection Sort
var selectionSort = function (array) {
    for (var i = 0; i < array.length - 1; i++) {
        var minValIndex = i;
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[minValIndex]) {
                minValIndex = j;
            }
        }
        var temp = array[i];
        array[i] = array[minValIndex];
        array[minValIndex] = temp;
    }
    return array;
};
// Insertion Sort
var ar1 = [9, 5, 4, 3, 1];
console.log(bubbleSort(ar1));
console.log("BUBBLE SORT");
console.log(selectionSort(ar1));
console.log("SELECTION SORT");
