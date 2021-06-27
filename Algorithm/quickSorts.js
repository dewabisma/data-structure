"use strict";
var swap = function (array, indexItem1, indexItem2) {
    var temp = array[indexItem1];
    array[indexItem1] = array[indexItem2];
    array[indexItem2] = temp;
};
var pivot = function (array, pivotIndex, endIndex) {
    if (pivotIndex === void 0) { pivotIndex = 0; }
    if (endIndex === void 0) { endIndex = array.length - 1; }
    var swapIndex = pivotIndex;
    for (var i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, swapIndex, pivotIndex);
    return swapIndex;
};
// When even number it will break if base case using equal
var quickSorts = function (array, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = array.length - 1; }
    if (left < right) {
        var swapIndex = pivot(array, left, right);
        quickSorts(array, left, swapIndex - 1);
        quickSorts(array, swapIndex + 1, right);
    }
    return array;
};
var myArray = [4, 6, 1, 5, 2];
console.log(quickSorts(myArray));
