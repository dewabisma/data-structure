"use strict";
var HashTable = /** @class */ (function () {
  function HashTable(size) {
    if (size === void 0) {
      size = 29;
    }
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
    return this;
  };
  return HashTable;
})();
var hashTable = new HashTable();

console.log(hashTable.set("wayan", 1234));
console.log(hashTable.set("ketut", 9999));
console.log(hashTable);
