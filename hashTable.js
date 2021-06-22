"use strict";
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 29; }
        this.dataKeys = [];
        this.dataMap = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            var ascii = key.charCodeAt(i);
            hash = (hash + ascii * 103) % this.dataMap.length;
        }
        return hash;
    };
    HashTable.prototype.set = function (key, val) {
        var index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, val]);
        this.dataKeys.push(key);
        return this;
    };
    HashTable.prototype.get = function (key) {
        var index = this._hash(key);
        if (!this.dataMap[index]) {
            return "Data not found!";
        }
        else {
            var isExist_1 = null;
            this.dataMap[index].forEach(function (data) {
                if (data[0] === key)
                    isExist_1 = data;
            });
            if (isExist_1) {
                return isExist_1[1];
            }
            else {
                return "Data not found!";
            }
        }
    };
    HashTable.prototype.keys = function () {
        if (this.dataKeys.length > 0) {
            return this.dataKeys;
        }
        else {
            return "HashTable is empty";
        }
    };
    return HashTable;
}());
var hashTable = new HashTable();
console.log(hashTable.set("wayan", 1234));
console.log(hashTable.set("ketut", 9999));
console.log(hashTable.get("wayan"));
console.log(hashTable.get("gusti"));
console.log(hashTable.keys());
console.log(hashTable);
