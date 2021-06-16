"use strict";
var NodeBST = /** @class */ (function () {
    function NodeBST(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
    return NodeBST;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(val) {
        this.root = null;
        if (val) {
            var newNode = new NodeBST(val);
            this.root = newNode;
        }
        else {
            this.root = null;
        }
    }
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new NodeBST(val);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var temp = this.root;
            var prev = void 0;
            while (temp) {
                prev = temp;
                if (newNode.value === (temp === null || temp === void 0 ? void 0 : temp.value)) {
                    return "Value already exists";
                }
                else if (newNode.value > (temp === null || temp === void 0 ? void 0 : temp.value)) {
                    temp = temp.right;
                }
                else {
                    temp = temp.left;
                }
            }
            if (newNode.value > prev.value) {
                prev.right = newNode;
            }
            else {
                prev.left = newNode;
            }
        }
        return newNode;
    };
    BinarySearchTree.prototype.contains = function (val) {
        if (!this.root)
            return false;
        var temp = this.root;
        while (temp) {
            if (val === temp.value) {
                return true;
            }
            else if (val > temp.value) {
                temp = temp.right;
            }
            else {
                temp = temp.left;
            }
        }
        return false;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
console.log(bst.insert(5));
console.log(bst.insert(2));
console.log(bst.insert(2));
console.log(bst.insert(3));
console.log(bst.insert(7));
console.log(bst.insert(9));
console.log("============= INSERT");
console.log("contain 20: ", bst.contains(20));
console.log("contain 3: ", bst.contains(3));
console.log("============= CONTAINS");
console.log(bst);
