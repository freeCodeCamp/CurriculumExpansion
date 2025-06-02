1. You should define a function named `adjacency_list_to_matrix` to convert an adjacency list to an adjacency matrix.
2. The function should take one argument, `adj_list`, which is a dictionary representing the adjacency list of a graph.
3. Inside the function:
   - Determine the number of nodes based on the length of the dictionary.
   - Initialize a 2D list of size n x n filled with 0s, where n is the number of nodes.
   - Iterate through each source node and its neighbors in the adjacency list.
   - Iterate through each neighbor of the source node and set the corresponding entry in the matrix to 1.
   - The function should return the complete adjacency matrix.
