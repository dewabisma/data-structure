class HashTable<T> {
  public dataMap: [string, T][][];
  private dataKeys: string[] = [];

  constructor(size: number = 29) {
    this.dataMap = new Array(size);
  }

  private _hash(key: string) {
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
    this.dataKeys.push(key);

    return this;
  }

  get(key: string) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      return "Data not found!";
    } else {
      let isExist = null;

      this.dataMap[index].forEach((data) => {
        if (data[0] === key) isExist = data;
      });

      if (isExist) {
        return isExist[1];
      } else {
        return "Data not found!";
      }
    }
  }

  keys() {
    if (this.dataKeys.length > 0) {
      return this.dataKeys;
    } else {
      return "HashTable is empty";
    }
  }

  // keys() {
  //   let keys: string[] = [];

  //   if (!this.dataMap) {
  //     return "HashTable is empty";
  //   } else {
  //     this.dataMap.forEach((data) => {
  //       data.forEach((pair) => {
  //         keys.push(pair[0]);
  //       });
  //     });

  //     return keys;
  //   }
  // }
}

const hashTable = new HashTable<number>();

console.log(hashTable.set("wayan", 1234));
console.log(hashTable.set("ketut", 9999));

console.log(hashTable.get("wayan"));
console.log(hashTable.get("gusti"));

console.log(hashTable.keys());

console.log(hashTable);
