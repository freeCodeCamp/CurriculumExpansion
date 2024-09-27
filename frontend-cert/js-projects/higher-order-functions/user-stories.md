You should have a callback function named `sortByYear` that accepts two books, `book1`, and `book2` as parameter for sorting the array.

The `sortByYear` function should return `-1` if the `release_year` of `book1` object is smaller than that of the `book2` object.

The `sortByYear` function should return `1` if the `release_year` of `book1` object is bigger than that of the `book2` object.

The `sortByYear` function should return `0` for all other scenarios.

You should have an array of objects named `books` where each object in the array should have a string `title`, another string `author_name`, and a number `release_year`.

You should call the `filter` higher-order function on the `books` array with a callback to filter out books written after a certain year such as 1950 and save the filtered array in a new array named `filteredBooks`.

You should call the `sort` higher order function by passing the `sortByYear` callback function on the `filteredBooks` array to sort the books according to their `release_year` in ascending order and save the sorted array in a new array named `filteredBooksSorted`.

You should call the `forEach` higher order function on the `filteredBooksSorted` array and print out the details of each book following the `<BOOK_TITLE> by <BOOK_AUTHOR> (<RELEASE_YEAR>)` format.
