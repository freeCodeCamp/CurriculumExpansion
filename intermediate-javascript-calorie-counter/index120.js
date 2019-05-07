document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'));
  const meal = total[0];
  // console.log(meal.value);
}
/*
We need a way to iterate through all the `meal` items in the `total` array and extract the values that the user entered.
The `map()` method allows us to do exactly that.

Delete the lines 6 and 7.
Chain the `.map()` method to the end of your `Array.from()` method.
*/
