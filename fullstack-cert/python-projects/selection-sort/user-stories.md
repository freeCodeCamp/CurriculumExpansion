# Updated Description

Selection sort is another popular sorting algorithm taught in most computer science courses.

This algorithm works by repeatedly finding the smallest element from the unsorted portion of the list and swapping it with the first unsorted element. It begins by selecting the minimum value in the entire list and swapping it with the first element. Then it moves to the second position, finds the smallest value in the remaining unsorted elements, and swaps it with the second element. This process continues, moving through the list one element at a time, until the entire list is sorted.

Selection sort results in a quadratic time complexity in the best, average, and worst case scenarios. The space complexity will be constant `O(1)` because the sorting is done in place and a constant amount of memory is being used regardless of the size of the list.

**Instructions**: Write a function `selection_sort` which takes a list of integers as input and returns that list of integers in sorted order from smallest to largest.

# User Stories

1. You should define a function named `selection_sort`.
1. Your `selection_sort` function should have one parameter that represents the list of items.
1. Your `selection_sort` function should take a list and sort the items in place from smallest to largest.
1. `selection_sort([33, 1, 89, 2, 67, 245])` should return a list that is unchanged except for the order.
1. `selection_sort([33, 1, 89, 2, 67, 245])` should return `[1, 2, 33, 67, 89, 245]`.
1. `selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3])` should return `[3, 5, 12, 15, 16, 23, 72, 99, 567]`.
1. `selection_sort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])` should return `[1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]`.
1. Your `selection_sort` function should not use the built-in `sort()` method.
