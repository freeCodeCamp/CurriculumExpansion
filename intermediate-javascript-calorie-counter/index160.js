document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(meal => Number(meal.value))
    .reduce();
}
/*
The reduce method takes a callback function as well as an optional initial value, its function signature is as follows:

`Array.reduce(callbackFunction[, initialValue])`

Note that the square brackets `[]` around `initialValue` indicates that it's an optional parameter.

The `callbackFunction` reducer itself takes 2 arguments, an accumulator and a current value:

`function(accumulator, currentValue) { /*code to run*\/}`

or using arrow functions:

`(accumulator, currentValue) => { /*code to run*\/}`

Insert the above callback function as an argument in the `.reduce()` function.
*/
