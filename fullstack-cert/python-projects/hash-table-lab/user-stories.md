1. You should define a class named `HashTable` with a `collection` property initialized as an empty dictionary inside its `__init__` method. The `collection` dictionary should store key-value pairs based on the hashed value of the key.

2. The `HashTable` class should have four instance methods: `hash`, `add`, `remove`, and `lookup`.

3. The `hash` method should:

- Take a string as a parameter and return a hashed value computed as the sum of the Unicode (ASCII) values of each character in the string. Use the `ord` function for this computation.

4. The `add` method should:

- Take key and value as parameters, and compute the hash of the key.
- Verify if the key already exists in the hash table. If the key does not exist, it should intialize an empty dictionary inside the `collection` dictionary for the hash value.
- Use the hashed value to store the key-value pair inside the `collection` dictionary.

5. The `remove` method should:

- Take a key as a parameter and compute its hash.
- Remove the corresponding key-value pair from the hash table.

6. The `lookup` method should:

- Take a key as a parameter.
- Compute the hash of the key, and return the corresponding value stored inside the hash table. 
- If the key does not exist in the collection, it should return `None`.