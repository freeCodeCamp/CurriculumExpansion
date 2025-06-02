INF = float('inf')
adj_matrix = [
    [0, 5, 3, INF, 11, INF],
    [5, 0, 1, INF, INF, 2],
    [3, 1, 0, 1, 5, INF],
    [INF, INF, 1, 0, 9, 3],
    [11, INF, 5, 9, 0, INF],
    [INF, 2, INF, 3, INF, 0]
]

def shortest_path_matrix(matrix, start_node, target_node=None):
    n = len(matrix)

    distance = [INF] * n
    distance[start_node] = 0

    paths = [[] for _ in range(n)]
    paths[start_node].append(start_node)

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
                    paths[neighbor] = paths[current] + [neighbor]

    targets = [target_node] if target_node is not None else range(n)
    for i in targets:
        if i == start_node or distance[i] == INF:
            continue
        print(f"Shortest path from {start_node} to {i}: {' -> '.join(map(str, paths[i]))} (distance {distance[i]})")
    
    return distance, paths

# Example usage:
shortest_path_matrix(adj_matrix, 0, 5)