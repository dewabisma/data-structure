class HashTable<T> {
  public dataMap: [string, T][][];

  constructor(size: number = 29) {
    this.dataMap = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      const ascii = key.charCodeAt(i);
      hash = (hash + ascii * 103) % this.dataMap.length;
    }

    return hash;
  }

  set(key: string, val: T) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, val]);

    return this;
  }
}

const hashTable = new HashTable<number>();

console.log(hashTable.set("wayan", 1234));
console.log(hashTable.set("ketut", 9999));

console.log(hashTable);
