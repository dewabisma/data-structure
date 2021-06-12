import { Nodeku } from "./linkedlist";

class NodeDLL<T> extends Nodeku<T> {
  public prev: NodeDLL<T> | null;
  public next: NodeDLL<T> | null;

  constructor(val: T) {
    super(val);

    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedlist<T> {
  private head: NodeDLL<T> | null = null;
  private tail: NodeDLL<T> | null = null;
  private length: number = 0;

  constructor(val: T) {
    const newNode = new NodeDLL(val);

    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  push(val: T) {
    const newNode = new NodeDLL(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) {
      return "DLL is empty";
    }

    const tempPointer = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tempPointer!.prev;

      this.tail!.next = null;
      tempPointer!.prev = null;
    }

    this.length--;
    return tempPointer;
  }

  unshift(val: T) {
    const newNode = new NodeDLL(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;

      this.head = this.head.prev;
    }

    this.length++;
    return newNode;
  }

  shift() {
    if (!this.head) return "DLL is empty";

    const tempPointer = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tempPointer.next;
      this.head!.prev = null;
      tempPointer.next = null;
    }

    this.length--;
    return tempPointer;
  }

  get(index: number) {
    if (!this.head) return "DLL is empty";
    if (index >= this.length || index < 0) return "Index is out of bound";
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let n = 0;
    let lengthMedian = Math.ceil(this.length / 2);
    let tempPointer: NodeDLL<T>;

    if (index + 1 <= lengthMedian) {
      tempPointer = this.head;

      while (n < index) {
        tempPointer = tempPointer.next!;

        n++;
      }
    } else {
      tempPointer = this.tail!;

      while (n < this.length - 1 - index) {
        tempPointer = tempPointer.prev!;

        n++;
      }
    }

    return tempPointer;
  }
}

const listku = new DoublyLinkedlist(1);

console.log(listku.push(5));
console.log(listku.push(2));
console.log(listku.push(7));
console.log(listku.push(9));
console.log(listku.push(11));
console.log(listku.push(12));
console.log(listku.push(20));
// console.log(listku.push(30));
console.log("========================= PUSH");

// console.log(listku.pop());
// console.log(listku.pop());
// console.log(listku.pop());
// console.log(listku.pop());

// console.log(listku.unshift(99));
// console.log(listku.unshift(12));
// console.log(listku.unshift(8));
// console.log(listku.unshift(21));
console.log("========================= UNSHIFT");

// console.log(listku.shift());
// console.log(listku.shift());
// console.log(listku.shift());
// console.log(listku.shift());
console.log("========================= SHIFT");

console.log(listku.get(4));
console.log("========================= GET");

console.log(listku);
