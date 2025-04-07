def quick_sort(array):
    if len(array) == 0:
        return []
    pivot = array[0]
    lesser = []
    equal = []
    greater = []
    for i in array:
        if i < pivot:
            lesser.append(i)
        elif i > pivot:
            greater.append(i)
        else:
            equal.append(i)
    return quick_sort(lesser) + equal + quick_sort(greater)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))