The Bubble Sort algorithm sorts a sequence of integers by comparing couples of adjacient elements starting from the beginning of the sequence. If the first element is greater then the second one, it swaps them. Then, it prooceeds with the following couple. When the sequence ends, it starts a new cycle from the beginning of the sequence, and repeats the process until the elements are sorted.

For this lab, you have been provided with all the HTML and CSS. You will use JavaScript to complete the Bubble Sort Visualizer so that it visualizes each step needed by the Bubble Sort algorithm to sort an array of five integers.

1. You should a function named `generateElement` that returns a random integer between `1` and `100` inclusive.
1. You should have a function named `generateArray` that uses the `generateElement` function and returns an array containing five random integers between `1` and `100`.
1. You should have a function named `generateContainer` that returns an empty `div` element.
1. You should have a function named `fillArrContainer` that takes an array as the first argument and an HTML element as the second argument.
1. The `fillArrContainer` function should fill the element passed to the function with five `span` elements with the text of an integer from the array passed to the function function.
1. You should have a function named `isOrdered` that takes two integers and returns a boolean indicating if the first integer is less than the second.
1. You should have a function named `swapElements` that takes an array of integers and a numeric index.
1. The `swapElements` function should modify the array in place by swapping the element at the passed index and the following element if the first element is greater than the second.
1. You should have a function named `highligthCurrentEls` that takes an HTML element and a numeric index.
1. The `highligthCurrentEls` function should set the border of the given element's descendants placed at the given index and at the next one to `2px dashed red`.
1. When you click `#generate-btn` you should fill `#starting-array-container` with five `span` elements, each with a random number as its text.
1. When you click `#generate-btn` you should make `#sort-btn` visible on the page.
1. After you click `#sort-btn`, `#array-container` should contain a `div` element for each of the steps required by the Bubble Sort algorithm to sort the starting array, including the `div` representing the starting array and a `div` representing the sorted array.
1. Each `div` should contain five `span`, each with a number as its text.
1. After you click `#sort-btn`, `#starting-array-container` should represent the starting step with the initial array and the first two integers highlighted.
1. For each sorting step, you should use `highligthCurrentEls` to highlight the two numbers that are being compared, and swap them in the next step by using `swapElements`.