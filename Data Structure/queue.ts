class NodeQueue<T> {
  public value: T | null;
  public next: NodeQueue<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Queue<T> {
  private first: NodeQueue<T> | null;
  private last: NodeQueue<T> | null;
  private length: number = 0;

  constructor(val: T) {
    const newNode = new NodeQueue(val);

    this.first = newNode;
    this.last = newNode;
    this.length++;
  }

  enqueue(val: T) {
    const newNode = new NodeQueue(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return newNode;
  }

  dequeue() {
    if (!this.first) return "Queue is empty";

    const tempPointer = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      tempPointer.next = null;
    }

    this.length--;
    return tempPointer;
  }
}

const queueku = new Queue(1);

console.log(queueku.enqueue(2));
console.log(queueku.enqueue(3));
console.log("==================== ENQUEUE");

console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log(queueku.dequeue());
console.log("==================== DEQUEUE");

console.log(queueku);
