"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linkedlist_1 = require("./linkedlist");
var NodeDLL = /** @class */ (function (_super) {
    __extends(NodeDLL, _super);
    function NodeDLL(val) {
        var _this = _super.call(this, val) || this;
        _this.next = null;
        _this.prev = null;
        return _this;
    }
    return NodeDLL;
}(linkedlist_1.Nodeku));
var DoublyLinkedlist = /** @class */ (function () {
    function DoublyLinkedlist(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        var newNode = new NodeDLL(val);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }
    DoublyLinkedlist.prototype.push = function (val) {
        var newNode = new NodeDLL(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    };
    DoublyLinkedlist.prototype.pop = function () {
        if (!this.head) {
            return "DLL is empty";
        }
        var tempPointer = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = tempPointer.prev;
            this.tail.next = null;
            tempPointer.prev = null;
        }
        this.length--;
        return tempPointer;
    };
    DoublyLinkedlist.prototype.unshift = function (val) {
        var newNode = new NodeDLL(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = this.head.prev;
        }
        this.length++;
        return newNode;
    };
    DoublyLinkedlist.prototype.shift = function () {
        if (!this.head)
            return "DLL is empty";
        var tempPointer = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = tempPointer.next;
            this.head.prev = null;
            tempPointer.next = null;
        }
        this.length--;
        return tempPointer;
    };
    DoublyLinkedlist.prototype.get = function (index) {
        if (!this.head)
            return "DLL is empty";
        if (index >= this.length || index < 0)
            return "Index is out of bound";
        if (index === 0)
            return this.head;
        if (index === this.length - 1)
            return this.tail;
        var n = 0;
        var lengthMedian = Math.ceil(this.length / 2);
        var tempPointer;
        if (index + 1 <= lengthMedian) {
            tempPointer = this.head;
            while (n < index) {
                tempPointer = tempPointer.next;
                n++;
            }
        }
        else {
            tempPointer = this.tail;
            while (n < this.length - 1 - index) {
                tempPointer = tempPointer.prev;
                n++;
            }
        }
        return tempPointer;
    };
    DoublyLinkedlist.prototype.set = function (index, val) {
        var desiredNode = this.get(index);
        if (desiredNode instanceof NodeDLL) {
            desiredNode.value = val;
        }
        return desiredNode;
    };
    DoublyLinkedlist.prototype.insert = function (index, val) {
        if (index === 0)
            return this.unshift(val);
        if (index === this.length)
            return this.push(val);
        var tempPointer = this.get(index);
        if (tempPointer instanceof NodeDLL) {
            var newNode = new NodeDLL(val);
            var prevPointer = tempPointer.prev;
            newNode.next = tempPointer;
            newNode.prev = prevPointer;
            tempPointer.prev = newNode;
            prevPointer.next = newNode;
            this.length++;
            return newNode;
        }
        return tempPointer;
    };
    return DoublyLinkedlist;
}());
var listku = new DoublyLinkedlist(1);
// console.log(listku.push(5));
// console.log(listku.push(2));
// console.log(listku.push(7));
// console.log(listku.push(9));
// console.log(listku.push(11));
// console.log(listku.push(12));
// console.log(listku.push(20));
// console.log(listku.push(30));
// console.log("========================= PUSH");
// console.log(listku.pop());
// console.log(listku.pop());
// console.log(listku.pop());
// console.log(listku.pop());
// console.log(listku.unshift(99));
// console.log(listku.unshift(12));
// console.log(listku.unshift(8));
// console.log(listku.unshift(21));
// console.log("========================= UNSHIFT");
// console.log(listku.shift());
// console.log(listku.shift());
// console.log(listku.shift());
// console.log(listku.shift());
// console.log("========================= SHIFT");
// console.log(listku.get(4));
// console.log("========================= GET");
// console.log(listku.set(5, 10));
// console.log(listku.set(7, 22));
// console.log("========================= SET");
// console.log(listku.insert(0, 10));
// console.log(listku.insert(2, 22));
// console.log("========================= INSERT");
console.log(listku);
