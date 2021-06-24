"use strict";
var NodeStack = /** @class */ (function () {
    function NodeStack(val) {
        this.value = val;
        this.next = null;
    }
    return NodeStack;
}());
var Stack = /** @class */ (function () {
    function Stack(val) {
        this.top = null;
        this.length = 0;
        var newNode = new NodeStack(val);
        this.top = newNode;
        this.length++;
    }
    Stack.prototype.push = function (val) {
        var newNode = new NodeStack(val);
        if (!this.top) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return newNode;
    };
    Stack.prototype.pop = function () {
        if (!this.top)
            return "Stack is empty";
        var tempPointer = this.top;
        this.top = this.top.next;
        tempPointer.next = null;
        this.length--;
        return tempPointer;
    };
    return Stack;
}());
var stackku = new Stack(1);
console.log(stackku.push(9));
console.log(stackku.push(2));
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.push(2));
console.log(stackku);
