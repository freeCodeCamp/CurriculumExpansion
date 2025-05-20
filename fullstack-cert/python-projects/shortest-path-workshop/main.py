nodes = ['A', 'B', 'C', 'D', 'E', 'F']
index = {node: i for i, node in enumerate(nodes)}

INF = float('inf')
adj_matrix = [
    [0, 5, 3, INF, 11, INF],
    [5, 0, 1, INF, INF, 2],
    [3, 1, 0, 1, 5, INF],
    [INF, INF, 1, 0, 9, 3],
    [11, INF, 5, 9, 0, INF],
    [INF, 2, INF, 3, INF, 0]
]

def shortest_path_matrix(matrix, nodes, start_label, target_label=''):
    n = len(nodes)
    start = nodes.index(start_label)

    distance = [INF] * n
    distance[start] = 0

    paths = [[] for _ in range(n)]
    paths[start].append(start_label)

    visited = [False] * n

    for _ in range(n):
        min_distance = INF
        current = -1
        for i in range(n):
            if not visited[i] and distance[i] < min_distance:
                min_distance = distance[i]
                current = i

        if current == -1:
            break

        visited[current] = True

        for neighbor in range(n):
            weight = matrix[current][neighbor]
            if weight != INF and not visited[neighbor]:
                new_distance = distance[current] + weight
                if new_distance < distance[neighbor]:
                    distance[neighbor] = new_distance
                    paths[neighbor] = paths[current] + [nodes[neighbor]]

    targets = [target_label] if target_label else nodes
    for i, label in enumerate(nodes):
        if label == start_label or label not in targets:
            continue
        print(f"Shortest path from {start_label} to {label}: {' -> '.join(paths[i])} (distance {distance[i]})")
    
    return distance, paths
            