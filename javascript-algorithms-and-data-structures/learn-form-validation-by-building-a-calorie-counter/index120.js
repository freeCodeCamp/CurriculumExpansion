document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'));
  const meal = total[0];
  // console.log(meal.value);
}
/*
We need a way to iterate through all the `meal` items in the `total` array and return the values that the user entered as an array.

The `map()` method allows us to do exactly that.

Delete `const meal = total[0];` and chain the `.map()` method to the end of your `Array.from()` method.
Here's an example of `.map()` chained to an array: `[3, 2, 1].map()`
*/
