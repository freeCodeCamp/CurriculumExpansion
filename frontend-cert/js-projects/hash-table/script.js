class HashTable {
    constructor() {
        this.collection = {};
    }

    static hash(string) {
        let hashed = 0;
        for (let i = 0; i < string.length; i++) {
            hashed += string.charCodeAt(i);
        }
        return hashed
    }

    add(key, val)  {
        const theHash = HashTable.hash(key);
        if (!this.collection.hasOwnProperty(theHash)) {
            this.collection[theHash] = {};
        }
        this.collection[theHash][key] = val;
    }

    remove(key) {
        const theHash = HashTable.hash(key);
        const hashedObj = this.collection[theHash];
        if (hashedObj.hasOwnProperty(key)) {
          delete hashedObj[key];
        }
        if (!Object.keys(hashedObj).length) {
          delete this.collection[theHash];
        }
      }

    lookup(key) {
        const theHash = HashTable.hash(key);
        if (this.collection.hasOwnProperty(theHash)) {
        return this.collection[theHash][key];
        }
        return null
    }
}