document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(meal => Number(meal.value))
    .reduce();
}
/*
The `reduce()` method takes a callback function with at least two arguments, an accumulator and a current value:

`function(accumulator, currentValue) { /*code to run*\/}`

or using arrow functions:

`(accumulator, currentValue) => { /*code to run*\/}`

Insert the above callback function as an argument in the `.reduce()` function.
*/
