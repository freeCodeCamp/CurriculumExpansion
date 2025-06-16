1. You should define a function named `adjacency_list_to_matrix` to convert an adjacency list to an adjacency matrix.
2. The function should take a dictionary representing the adjacency list of an unweighted (either undirected or directed) graph as its argument.
3. The function should:
   - Convert the adjacency list to an adjacency matrix.
   - Print each row in the adjacency matrix.
   - Return the adjacency matrix.

For example, `adjacency_list_to_matrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})` should print:

```md
[0, 0, 1, 0]
[0, 0, 1, 1]
[1, 1, 0, 1]
[0, 1, 1, 0]
```

and return `[[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]`.
