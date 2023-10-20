my_graph = {
    'A': [('B', 1), ('C', 6)],
    'B': [('A', 1), ('D', 3), ('E', 1), ('F', 5)],
    'C': [('A', 6), ('D', 4)],
    'D': [('B', 3), ('C', 4), ('E', 2), ('G', 3)],
    'E': [('B', 1), ('D', 2), ('F', 9)],
    'F': [('B', 5), ('E', 9), ('G', 8)],
    'G': [('D', 3), ('F', 8)]
}

def shortest_path(graph, start, end = ''):
    unvisited = []
    distances = {}
    paths = {}
    inf = float('inf')
    for node in graph:
        unvisited.append(node)
        paths[node] = []
        if node == start:
            distances[node] = 0
        else:
            distances[node] = inf
    
    current = start
    paths[current].append(current)
    
    while True:
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node] and paths[node][-1] == node:
                    paths[node] = paths[current][:]
                else:
                    paths[node].extend(paths[current])
                paths[node].append(node)
        if unvisited:
            unvisited.remove(current)
        if not unvisited:
            if end:
                print(f'\n{start}-{end} distance: {distances[end]}\nPath: {" -> ".join(paths[end])}\n')
            else:
                for node in graph:
                    if node != start:
                        print(f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}')
                print()
            return distances, paths
        
        next_obj = {k:v for (k, v) in distances.items() if k in unvisited}
        current = min(next_obj, key=next_obj.get)

shortest_path(my_graph, 'A', 'G')
