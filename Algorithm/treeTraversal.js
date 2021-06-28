"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binarySearchTree_1 = require("../Data Structure/binarySearchTree");
var DfsPreOrder = function (root, queuenya) {
    if (queuenya === void 0) { queuenya = []; }
    if (!root)
        return;
    queuenya.push(root.value);
    DfsPreOrder(root.left, queuenya);
    DfsPreOrder(root.right, queuenya);
    return queuenya;
};
var breadthFirstSearch = function (root, queuenya, result) {
    if (queuenya === void 0) { queuenya = []; }
    if (result === void 0) { result = []; }
    if (!root)
        return;
    queuenya.push(root);
    while (queuenya.length > 0) {
        var node = queuenya.shift();
        result.push(node.value);
        if (node === null || node === void 0 ? void 0 : node.left) {
            queuenya.push(node.left);
        }
        if (node === null || node === void 0 ? void 0 : node.right) {
            queuenya.push(node.right);
        }
    }
    return result;
};
var bst1 = new binarySearchTree_1.BinarySearchTree();
var arrayku = [9, 5, 12, 2, 6, 10, 13];
arrayku.forEach(function (val) { return bst1.insert(val); });
console.log(bst1);
console.log(breadthFirstSearch(bst1.root));
console.log('breadth first search');
console.log(DfsPreOrder(bst1.root));
console.log('Depth first search');
