"use strict";
var merge = function (array1, array2) {
    var combinedArray = [];
    var i = 0;
    var j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combinedArray.push(array1[i]);
            i++;
        }
        else {
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
var x = [1, 3, 5, 7, 8, 12];
var y = [2, 4, 9, 11];
console.log(merge(x, y));
