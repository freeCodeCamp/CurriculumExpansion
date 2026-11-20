In this lab, you will build the logic behind a paint bucket tool, like the one found in most image editors. The canvas is a grid of colored cells, and you can think of it as a graph: each cell is a node, connected to the cells directly above, below, left and right of it. Clicking a cell with the paint bucket recolors that cell and every cell connected to it through cells of the same color, which is called a flood fill.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `get_neighbors` with three parameters: `grid`, `row`, and `col`. `grid` is a non-empty list of rows, where each row is a list of single-letter strings representing colors, and all rows have the same length. `get_neighbors` should return a list of `(row, col)` tuples for the cells directly above, below, left and right of the given cell, in any order. Cells outside the grid should not be included.
1. You should have a function named `get_region` with three parameters: `grid`, `row`, and `col`. It should return a set of `(row, col)` tuples containing the given cell and every cell connected to it through horizontally or vertically adjacent cells of the same color.
1. You should have a function named `flood_fill` with four parameters: `grid`, `row`, `col`, and `new_color`.
1. `flood_fill` should:
   - return a new grid where every cell in the region of the given cell is changed to `new_color`.
   - return a grid equal to the original one if the given cell is already `new_color`.
   - not modify the original grid.
1. You should have a function named `count_regions` with a `grid` parameter. It should return the number of regions in the grid, where a region is a group of connected cells of the same color.
1. You should have a function named `min_clicks` with two parameters: `grid` and `target_color`. It should return the minimum number of paint bucket clicks, each using `target_color`, needed to make every cell in the grid `target_color`.

## Usage example

```py
canvas = [
    ['R', 'R', 'G', 'G'],
    ['R', 'B', 'B', 'G'],
    ['R', 'R', 'B', 'G'],
    ['G', 'R', 'R', 'R'],
]

print(get_neighbors(canvas, 0, 0))
print(sorted(get_region(canvas, 1, 1)))
print(flood_fill(canvas, 1, 1, 'Y'))
print(count_regions(canvas))
print(min_clicks(canvas, 'G'))
```

That code should print:

```bash
[(1, 0), (0, 1)]
[(1, 1), (1, 2), (2, 2)]
[['R', 'R', 'G', 'G'], ['R', 'Y', 'Y', 'G'], ['R', 'R', 'Y', 'G'], ['G', 'R', 'R', 'R']]
4
2
```

The order of the tuples returned by `get_neighbors` may differ in your solution.
