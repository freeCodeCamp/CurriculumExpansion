def adjacency_list_to_matrix(adj_list):
    n = len(adj_list)
    
    adj_matrix = [[0] * n for _ in range(n)]

    for src_node, neighbors in adj_list.items():
        for dest_node in neighbors:
            adj_matrix[src_node][dest_node] = 1

    return adj_matrix


adj_list = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

matrix = adjacency_list_to_matrix(adj_list)

for row in matrix:
    print(row)
