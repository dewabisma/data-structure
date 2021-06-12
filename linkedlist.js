"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodeku = void 0;
var Nodeku = /** @class */ (function () {
    function Nodeku(value) {
        this.value = value;
        this.next = null;
    }
    return Nodeku;
}());
exports.Nodeku = Nodeku;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var newNode = new Nodeku(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.push = function (val) {
        var newNode = new Nodeku(val);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        console.log(this);
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
            this.length--;
            this.tail = tempPointer;
        }
        else {
            console.log((_c = this.tail) === null || _c === void 0 ? void 0 : _c.value);
            this.head = null;
            this.tail = this.head;
            this.length--;
        }
    };
    LinkedList.prototype.unshift = function (val) {
        var newNode = new Nodeku(val);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        console.log(this);
    };
    LinkedList.prototype.shift = function () {
        if (!this.head && !this.tail) {
            console.log("linkedlist is empty");
        }
        else if (this.head !== this.tail) {
            var temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            console.log(temp.value);
            this.length--;
        }
        else {
            console.log(this.head.value);
            this.head = null;
            this.tail = this.head;
            this.length--;
        }
    };
    LinkedList.prototype.get = function (index) {
        if (!this.head && !this.tail) {
            console.log("linkedlist is empty");
        }
        else if (index < this.length && index >= 0) {
            var n = 0;
            var tempPointer = this.head;
            while (n < index) {
                tempPointer = tempPointer.next;
                n++;
            }
            return tempPointer;
        }
        else {
            console.log("index out of bound");
        }
    };
    LinkedList.prototype.set = function (index, value) {
        if (!this.head) {
            console.log("linkedlist is empty");
        }
        else if (index >= 0 && index < this.length) {
            var n = 0;
            var tempPointer = this.head;
            while (n < index) {
                tempPointer = tempPointer.next;
                n++;
            }
            tempPointer.value = value;
        }
        else {
            console.log("Index out of bound");
        }
    };
    LinkedList.prototype.insert = function (index, value) {
        var newNode = new Nodeku(value);
        if (!this.head && index === 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        else if (index >= 0 && index < this.length) {
            var n = 0;
            var tempPointer = this.head;
            var prevPointer = void 0;
            while (n < index) {
                prevPointer = tempPointer;
                tempPointer = tempPointer.next;
                n++;
            }
            newNode.next = tempPointer;
            if (index > 0) {
                prevPointer.next = newNode;
            }
            else {
                this.head = newNode;
            }
            this.length++;
        }
        else {
            console.log("Index out of bound");
        }
    };
    LinkedList.prototype.remove = function (index) {
        if (!this.head) {
            console.log("linkedlist is empty");
        }
        else if (index >= 0 && index < this.length) {
            if (index === 0) {
                this.shift();
            }
            else if (index === this.length - 1) {
                this.pop();
            }
            else {
                var prevPointer = this.get(index - 1);
                var tempPointer = prevPointer.next;
                prevPointer.next = tempPointer.next;
                tempPointer.next = null;
                console.log(tempPointer);
            }
            this.length--;
        }
        else {
            console.log("Index out of bound");
        }
    };
    LinkedList.prototype.reverse = function () {
        if (!this.head) {
            console.log("linkedlist is empty");
            return;
        }
        var tempPointer = this.head;
        var prevPointer = tempPointer;
        var nextPointer = tempPointer.next;
        this.head = this.tail;
        this.tail = tempPointer;
        if (this.length > 2) {
            while (nextPointer) {
                tempPointer = nextPointer;
                nextPointer = tempPointer.next;
                tempPointer.next = prevPointer;
                prevPointer = tempPointer;
            }
        }
        this.tail.next = null;
        console.log(this);
    };
    return LinkedList;
}());
var linkedList = new LinkedList(2);
// linkedList.push(5);
// linkedList.push(7);
// linkedList.push(9);
// linkedList.push(11);
// linkedList.push(13);
// console.log("=================================== PUSH");
// linkedList.get(0);
// linkedList.get(3);
// linkedList.get(-3);
// console.log("=================================== GET");
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// console.log("=================================== POP");
// linkedList.unshift(1);
// linkedList.unshift(10);
// console.log("=================================== UNSHIFT");
// linkedList.shift();
// linkedList.shift();
// console.log("=================================== SHIFT");
// linkedList.insert(1, 8);
// linkedList.insert(0, 11);
// linkedList.insert(1, 8);
// linkedList.insert(1, 7);
// linkedList.insert(0, 5);
// console.log("=================================== INSERT");
// linkedList.set(0, 20);
// linkedList.set(1, 99);
// console.log("=================================== SET");
// linkedList.get(0);
// linkedList.get(1);
// console.log("=================================== GET");
// linkedList.remove(2);
// console.log(linkedList.get(2));
// linkedList.reverse();
