document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    meal => Number(meal.value)
  );
  //   console.log(total);
}
/*
While you can use a loop to add everything in the `total` array to a variable, JavaScript provides the useful `reduce()` method.
Chain the `reduce()` method to the `Array.from()` expression.
*/
