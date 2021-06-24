"use strict";
var countFactorial = function (number) {
    if (number === 1)
        return 1;
    return number * countFactorial(number - 1);
};
console.log(countFactorial(10));
