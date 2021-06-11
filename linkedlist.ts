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
  private length: number;

  constructor(value: T) {
    const newNode = new Nodeku(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(val: T) {
    const newNode = new Nodeku(val);
    if (!this.head && !this.tail) {
      this.head = newNode;

      this.tail = this.head;
    } else {
      this.tail!.next = newNode;

      this.tail = this.tail!.next;
    }

    this.length++;
    console.log(this);
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

      this.length--;

      this.tail = tempPointer;
    } else {
      console.log(this.tail?.value);

      this.head = null;
      this.tail = this.head;

      this.length--;
    }
  }

  unshift(val: T) {
    const newNode = new Nodeku(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    console.log(this);
  }

  shift() {
    if (!this.head && !this.tail) {
      console.log("linkedlist is empty");
    } else if (this.head !== this.tail) {
      const temp = this.head;
      this.head = this.head!.next;
      temp!.next = null;

      console.log(temp!.value);
      this.length--;
    } else {
      console.log(this.head!.value);

      this.head = null;
      this.tail = this.head;
      this.length--;
    }
  }

  get(index: number) {
    if (!this.head && !this.tail) {
      console.log("linkedlist is empty");
    } else if (index < this.length && index >= 0) {
      let n = 0;
      let tempPointer = this.head;

      while (n < index) {
        tempPointer = tempPointer!.next;

        n++;
      }

      console.log(tempPointer?.value);
    } else {
      console.log("index out of bound");
    }
  }

  set(index: number, value: T) {
    if (!this.head) {
      console.log("linkedlist is empty");
    } else if (index >= 0 && index < this.length) {
      let n = 0;
      let tempPointer = this.head;

      while (n < index) {
        tempPointer = tempPointer.next!;

        n++;
      }

      tempPointer.value = value;
    } else {
      console.log("Index out of bound");
    }
  }

  insert(index: number, value: T) {
    const newNode = new Nodeku<T>(value);

    if (!this.head && index === 0) {
      this.head = newNode;
      this.tail = this.head;

      this.length++;
    } else if (index >= 0 && index < this.length) {
      let n = 0;
      let tempPointer = this.head;
      let prevPointer: Nodeku<T>;

      while (n < index) {
        prevPointer = tempPointer!;
        tempPointer = tempPointer!.next;

        n++;
      }

      newNode.next = tempPointer;

      if (index > 0) {
        prevPointer!.next = newNode;
      } else {
        this.head = newNode;
      }

      this.length++;
    } else {
      console.log("Index out of bound");
    }
  }

  remove(index: number) {
    if (!this.head) {
      console.log("linkedlist is empty");
    } else if (index >= 0 && index < this.length) {
      let n = 0;
      let tempPointer = this.head;
      let prevPointer: Nodeku<T>;

      while (n < index && tempPointer.next!.next) {
        prevPointer = tempPointer;
        tempPointer = tempPointer.next!;

        n++;
      }

      if (index === 0 && this.length === 1) {
        this.head = null;
        this.tail = this.head;
      } else if (index === 0) {
        this.head = tempPointer.next;
        tempPointer.next = null;
      } else if (!tempPointer.next!.next) {
        this.tail = tempPointer;
        tempPointer.next = null;
      } else {
        prevPointer!.next = tempPointer.next;
        tempPointer.next = null;
      }

      this.length--;
    } else {
      console.log("Index out of bound");
    }
  }
}

const linkedList = new LinkedList<number>(5);

linkedList.push(2);
linkedList.push(5);
linkedList.push(7);
linkedList.push(9);
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
linkedList.remove(4);
linkedList.get(3);
