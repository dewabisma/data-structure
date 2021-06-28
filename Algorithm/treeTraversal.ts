import {BinarySearchTree, NodeBST} from '../Data Structure/binarySearchTree'

const DfsPreOrder = (root: NodeBST < unknown > | null , result: unknown[] = []) => {
    if (!root) return

    result.push(root.value);

    DfsPreOrder(root.left!, result)
    DfsPreOrder(root.right!, result)

    return result;
}

const breadthFirstSearch = (root:NodeBST<unknown> | null, queuenya: NodeBST<unknown>[] = [], result: unknown[] = []) => {
    if (!root) return

    queuenya.push(root);

    while (queuenya.length > 0) {
        const node = queuenya.shift();
        result.push(node!.value);

        if (node?.left) {
            queuenya.push(node.left)
        }

        if (node?.right) {
            queuenya.push(node.right)
        }
    }
    
    return result;
}

const bst1 = new BinarySearchTree<number>();

const arrayku = [9,5,12,2,6,10,13];

arrayku.forEach(val => bst1.insert(val))


console.log(bst1)

console.log(breadthFirstSearch(bst1.root))
console.log('breadth first search')

console.log(DfsPreOrder(bst1.root))
console.log('Depth first search')