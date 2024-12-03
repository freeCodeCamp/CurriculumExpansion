const quickSort = (array) => {
    if (array.length === 0) {
        return [];
    }
    const pivot = array[0];
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let i of array) {
        if (i < pivot) {
            lesser.push(i);
        } else if (i > pivot) {
            greater.push(i);
        } else {
            equal.push(i);
        }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}
