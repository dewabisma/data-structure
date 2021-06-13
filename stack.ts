class NodeStack<T> {
  public value: T | null;
  public next: NodeStack<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Stack<T> {
  private top: NodeStack<T> | null = null;
  private length: number = 0;

  constructor(val: T) {
    const newNode = new NodeStack(val);

    this.top = newNode;
    this.length++;
  }

  push(val: T) {
    const newNode = new NodeStack(val);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    if (!this.top) return "Stack is empty";

    const tempPointer = this.top;

    this.top = this.top.next;
    tempPointer.next = null;

    this.length--;
    return tempPointer;
  }
}

const stackku = new Stack(1);

console.log(stackku.push(9));
console.log(stackku.push(2));
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.pop());
console.log(stackku.push(2));
console.log(stackku);
