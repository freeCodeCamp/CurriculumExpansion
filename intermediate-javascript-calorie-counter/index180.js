document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => {
      /*code to run*/
    }, 0);
}
/*
I DON'T KNOW IF THIS MAKES SENSE, COULD USE A SECOND PAIR OF EYES

Going back to our callback function, we want to sum up all of the numbers in the `total` array.

As an example, let's says we have an array `[1,3,5]` named `arr` and we want to sum up all the numbers.

We can use the reduce function as follows 
`arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);`

The `reduce()` function will iterate through each item in the array and run the callback function:

`(accumulator, currentValue) => accumulator + currentValue`

At `arr[0]`, the function is `(0, 1) => 0 + 1`, 
since `arr[0] = 1 = currentValue`

Note that the `accumulator` starts at `0` because that is what we povide as the initial value argument.  After running `0 + 1`, the accumulator is now `1`, which is passed to next invocation of the callback function at

arr[1], the function is `(1, 3) => 1 + 3`,

arr[2], the function is `(4, 5) => 4 + 5`, now the accumulator is `9` and we have gone through all of the items in `arr`, the reduce function will return `9`.

Replace the body of the callback function (`{/*code to run*\/}`) with `accumulator + currentValue`.

If you desire, you can now check your progress by adding `console.log(total)`, entering in values in the form, and then push the Calculate button.  You will see that the console will log the sum of the inputs that you entered, this is awesome!
*/
