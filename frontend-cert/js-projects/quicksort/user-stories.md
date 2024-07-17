1. You should define a function named `quickSort` to implement the quicksort algorithm.

1. The `quickSort` function should take an array of integers as input and return an array of these integers in sorted order from least to greatest.

1. To implement the algorithm, you should:
    - Choose a pivot value among the elements of the input array (use the first or the last element of the array).
    - Partition the input array into three subarrays made by elements greater than, lesser than, and equal to the pivot value.
    - Recursively call `quickSort` to sort the subarrays.