"use strict";
var NodeQueue = /** @class */ (function () {
    function NodeQueue(val) {
        this.value = val;
        this.next = null;
    }
    return NodeQueue;
}());
var Queue = /** @class */ (function () {
    function Queue(val) {
        this.length = 0;
        var newNode = new NodeQueue(val);
        this.first = newNode;
        this.last = newNode;
        this.length++;
    }
    Queue.prototype.enqueue = function (val) {
        var newNode = new NodeQueue(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return newNode;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return "Queue is empty";
        var tempPointer = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
            tempPointer.next = null;
        }
        this.length--;
        return tempPointer;
    };
    return Queue;
}());
var queueku = new Queue(1);
console.log(queueku.enqueue(2));
console.log(queueku.enqueue(3));
console.log("==================== ENQUEUE");
console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log("==================== DEQUEUE");
console.log(queueku);
