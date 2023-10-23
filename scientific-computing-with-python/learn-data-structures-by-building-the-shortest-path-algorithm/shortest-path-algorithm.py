my_graph = {
    'A': [('B', 1), ('C', 6)],
    'B': [('A', 1), ('D', 3), ('E', 1), ('F', 5)],
    'C': [('A', 6), ('D', 4)],
    'D': [('B', 3), ('C', 4), ('E', 2), ('G', 3)],
    'E': [('B', 1), ('D', 2), ('F', 9)],
    'F': [('B', 5), ('E', 9), ('G', 8)],
    'G': [('D', 3), ('F', 8)]
}

def shortest_path(graph, start, target = ''):
    unvisited = list(graph)
    distances = {node: 0 if node == start else float('inf') for node in graph}
    paths = {node: [] for node in graph}    
    paths[start].append(start)
    
    while unvisited:
        current = min(unvisited, key=distances.get)
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node] and paths[node][-1] == node:
                    paths[node] = paths[current][:]
                else:
                    paths[node].extend(paths[current])
                paths[node].append(node)
        unvisited.remove(current)
        
    if target:
        print(f'\n{start}-{target} distance: {distances[target]}\nPath: {" -> ".join(paths[target])}\n')
    else:
        for node in graph:
            if node == start:
                continue
            print(f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}')
        print()
    return distances, paths

shortest_path(my_graph, 'A', 'G')
