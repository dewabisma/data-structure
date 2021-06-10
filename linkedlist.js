"use strict";
var Nodeku = /** @class */ (function () {
    function Nodeku(value) {
        this.value = value;
        this.next = null;
    }
    return Nodeku;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var newNode = new Nodeku(value);
        this.head = newNode;
        this.tail = this.head;
    }
    LinkedList.prototype.push = function (val) {
        if (!this.head && !this.tail) {
            this.head = new Nodeku(val);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Nodeku(val);
            this.tail = this.tail.next;
        }
    };
    LinkedList.prototype.pop = function () {
        var _a, _b, _c;
        if (!this.head && !this.tail) {
            console.log("list is empty");
        }
        else if (this.head !== this.tail) {
            var tempPointer = this.head;
            while ((_a = tempPointer === null || tempPointer === void 0 ? void 0 : tempPointer.next) === null || _a === void 0 ? void 0 : _a.next) {
                tempPointer = tempPointer.next;
            }
            console.log((_b = this.tail) === null || _b === void 0 ? void 0 : _b.value);
            tempPointer.next = null;
            this.tail = tempPointer;
        }
        else {
            console.log((_c = this.tail) === null || _c === void 0 ? void 0 : _c.value);
            this.head = null;
            this.tail = this.head;
        }
    };
    return LinkedList;
}());
var linkedList = new LinkedList(5);
linkedList.push(2);
linkedList.push(5);
linkedList.push(7);
linkedList.push(9);
linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();
