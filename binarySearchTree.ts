class NodeBST<T> {
  public value: T | null;
  public left: NodeBST<T> | null;
  public right: NodeBST<T> | null;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  private root: NodeBST<T> | null = null;

  constructor(val?: T) {
    if (val) {
      const newNode = new NodeBST(val);
      this.root = newNode;
    } else {
      this.root = null;
    }
  }

  insert(val: T) {
    const newNode = new NodeBST(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let temp: NodeBST<T> | null = this.root;
      let prev: NodeBST<T> | null;

      while (temp) {
        prev = temp;

        if (newNode.value! === temp?.value!) {
          return "Value already exists";
        } else if (newNode.value! > temp?.value!) {
          temp = temp.right;
        } else {
          temp = temp.left;
        }
      }

      if (newNode.value! > prev!.value!) {
        prev!.right = newNode;
      } else {
        prev!.left = newNode;
      }
    }

    return newNode;
  }
}

const bst = new BinarySearchTree();

console.log(bst.insert(5));
console.log(bst.insert(2));
console.log(bst.insert(2));
console.log(bst.insert(3));
console.log(bst.insert(7));
console.log(bst.insert(9));
console.log(bst);
