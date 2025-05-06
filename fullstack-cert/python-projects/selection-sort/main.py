def selection_sort(nums):
    for i, _ in enumerate(nums):
        min_index = i

        for j in range(i + 1, len(nums)):
            if nums[j] < nums[min_index]:
                min_index = j

        if min_index != i:
            nums[i], nums[min_index] = nums[min_index], nums[i]

    return nums

# Test cases shown to campers


print(selection_sort([33, 1, 89, 2, 67, 245]))
print(selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3]))
print(selection_sort([1, 4, 2, 8, 345, 123, 43,
      32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

# Test cases not shown to campers to prevent attempts at hardcoded solutions

print(selection_sort([42, 17, 93, 8, 61, 29]))
print(selection_sort([11, 4, 78, 23, 55, 198, 65, 90, 2]))
print(selection_sort([9, 27, 3, 7, 101, 66, 34, 52, 87, 42, 12, 29]))
print(selection_sort([5, 14, 33, 77, 2, 18, 92, 1, 100, 45, 73, 64, 28, 56]))
