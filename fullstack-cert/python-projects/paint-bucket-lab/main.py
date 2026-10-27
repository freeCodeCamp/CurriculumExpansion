def get_neighbors(grid, row, col):
    neighbors = []
    # Check the cells above, below, left and right of (row, col)
    for row_step, col_step in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        new_row = row + row_step
        new_col = col + col_step
        if 0 <= new_row < len(grid) and 0 <= new_col < len(grid[0]):
            neighbors.append((new_row, new_col))
    return neighbors


def get_region(grid, row, col):
    color = grid[row][col]
    region = set()
    stack = [(row, col)]

    # Visit every cell reachable from (row, col) through cells of the same color
    while stack:
        current = stack.pop()
        if current in region:
            continue
        region.add(current)
        for neighbor_row, neighbor_col in get_neighbors(grid, *current):
            if grid[neighbor_row][neighbor_col] == color:
                stack.append((neighbor_row, neighbor_col))

    return region


def flood_fill(grid, row, col, new_color):
    # Copy each row so the original grid is not modified
    new_grid = [list(grid_row) for grid_row in grid]
    for region_row, region_col in get_region(grid, row, col):
        new_grid[region_row][region_col] = new_color
    return new_grid


def count_regions(grid):
    visited = set()
    regions = 0

    # Every cell not yet visited starts a new region
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if (row, col) not in visited:
                visited |= get_region(grid, row, col)
                regions += 1

    return regions


def min_clicks(grid, target_color):
    visited = set()
    clicks = 0

    # Each region that is not already the target color needs one click
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if (row, col) not in visited:
                visited |= get_region(grid, row, col)
                if grid[row][col] != target_color:
                    clicks += 1

    return clicks


canvas = [
    ['R', 'R', 'G', 'G'],
    ['R', 'B', 'B', 'G'],
    ['R', 'R', 'B', 'G'],
    ['G', 'R', 'R', 'R'],
]

print(get_neighbors(canvas, 0, 0))
# Output: [(1, 0), (0, 1)]

print(get_neighbors(canvas, 1, 2))
# Output: [(0, 2), (2, 2), (1, 1), (1, 3)]

print(sorted(get_region(canvas, 0, 0)))
# Output: [(0, 0), (0, 1), (1, 0), (2, 0), (2, 1), (3, 1), (3, 2), (3, 3)]

print(flood_fill(canvas, 1, 1, 'Y'))
# Output: [['R', 'R', 'G', 'G'], ['R', 'Y', 'Y', 'G'], ['R', 'R', 'Y', 'G'], ['G', 'R', 'R', 'R']]

print(flood_fill(canvas, 0, 0, 'R') == canvas)
# Output: True

print(count_regions(canvas))
# Output: 4

print(min_clicks(canvas, 'G'))
# Output: 2

print(min_clicks(canvas, 'R'))
# Output: 3

print(canvas)
# Output: [['R', 'R', 'G', 'G'], ['R', 'B', 'B', 'G'], ['R', 'R', 'B', 'G'], ['G', 'R', 'R', 'R']]
