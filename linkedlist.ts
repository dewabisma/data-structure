type NodeType = {
  value: number;
  next?: NodeType | null;
};

class Nodeku<T> {
  public value: T;
  public next: Nodeku<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Nodeku<T> | null;
  private tail: Nodeku<T> | null;

  constructor(value: T) {
    const newNode = new Nodeku(value);
    this.head = newNode;
    this.tail = this.head;
  }

  push(val: T) {
    if (!this.head && !this.tail) {
      this.head = new Nodeku(val);

      this.tail = this.head;
    } else {
      this.tail!.next = new Nodeku(val);

      this.tail = this.tail!.next;
    }
  }

  pop() {
    if (!this.head && !this.tail) {
      console.log("list is empty");
    } else if (this.head !== this.tail) {
      let tempPointer = this.head;

      while (tempPointer?.next?.next) {
        tempPointer = tempPointer.next;
      }

      console.log(this.tail?.value);
      tempPointer!.next = null;

      this.tail = tempPointer;
    } else {
      console.log(this.tail?.value);

      this.head = null;
      this.tail = this.head;
    }
  }
}

const linkedList = new LinkedList<number>(5);

linkedList.push(2);
linkedList.push(5);
linkedList.push(7);
linkedList.push(9);
linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();
