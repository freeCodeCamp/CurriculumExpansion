def binary_search(search_list, value):
    path_to_target = []
    low = 0
    high = len(search_list) - 1

    while low <= high:
        mid = (low + high) // 2
        value_at_middle = search_list[mid]
        path_to_target.append(value_at_middle)

        if value == search_list[mid]:
            return path_to_target
        elif value > search_list[mid]:
            low = mid + 1
        else:
            high = mid - 1

    return 'Value Not Found'

# Possible Test Cases


print(binary_search([1, 2, 3, 4, 5], 4))  # [3, 4]
print(binary_search([10, 20, 30, 40, 50], 25))  # 'Value Not Found'
print(binary_search([-5, 0, 5, 10, 15], 10))  # [5, 10]
print(binary_search([100, 200, 300, 400], 500))  # 'Value Not Found'
print(binary_search([3, 6, 9, 12, 15, 18], 6))  # [9, 3, 6]
