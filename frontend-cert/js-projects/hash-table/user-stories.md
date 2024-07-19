1. You should define a class named `HashTable` with a `collection` property initialized as an empty object inside its `constructor` method. The `collection` object should store key-value pairs based on the hashed value of the key.

1. The `HashTable` class should have four instance methods, namely `hash`, `add`, `remove`, and `lookup`.

1. The `hash` method should take a string as a parameter and return the hashed value computed as the sum of the UTF-16 code unit of each character in the string. Use the `charCodeAt` method for that.

1. The `add` method should take a key-value pair as the parameters, and hash the key. The hashed value should be used to store the key-value pair inside the hash table (`collection` object). When the same hash value is produced by multiple different keys, each key-value pair should be stored using the same hash value.

1. The `remove` method should take a key as a parameter and remove the corresponding key-value pair from the hash table.

1. The `lookup` method should take a key as a parameter and return the corresponding value stored inside the hash table, or `null` if not present. 