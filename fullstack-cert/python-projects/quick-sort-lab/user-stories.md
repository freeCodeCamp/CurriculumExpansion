1. You should define a function named `quick_sort` to implement the quicksort algorithm.

1. The `quick_sort` function should take a list of integers as input and return a new list of these integers in sorted order from least to greatest.

1. To implement the algorithm, you should:
   - Choose a pivot value from the elements of the input list (use the first or the last element of the list).
   - Partition the input list into three sublists: one with elements less than the pivot, one with elements equal to the pivot, and one with elements greater than the pivot.
   - Recursively call `quick_sort` to sort the sublists and concatenate the sorted sublists to produce the final sorted list.