# Updated Description

Selection sort is another popular sorting algorithm taught in most computer science courses.

This algorithm works by repeatedly finding the smallest element from the unsorted portion of the list and swapping it with the first unsorted element. It begins by selecting the minimum value in the entire list and swapping it with the first element. Then it moves to the second position, finds the smallest value in the remaining unsorted elements, and swaps it with the second element. This process continues, moving through the list one element at a time, until the entire list is sorted.

Selection sort results in a quadratic time complexity in the best, average, and worst case scenarios. The space complexity will be constant `O(1)` because the sorting is done in place and a constant amount of memory is being used regardless of the size of the list.

# User Stories

1. You should define a function named `selection_sort`.
1. Your `selection_sort` function should have one parameter that represents the list of items.
1. Your `selection_sort` function should take a list and sort the items in place from smallest to largest.
1. Your `selection_sort` function should not use the built-in `sort()` method.
