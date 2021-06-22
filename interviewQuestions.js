"use strict";
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [10, 6, 7, 8, 9];
var obj = {};
var arraysHaveSameItem = function (array1, array2) {
    array1.forEach(function (val) {
        obj[val] = val;
    });
    for (var i = 0; i < array2.length; i++) {
        if (obj[array2[i]])
            return true;
    }
    return false;
};
console.log(arraysHaveSameItem(arr1, arr2));
