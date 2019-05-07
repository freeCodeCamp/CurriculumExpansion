document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    meal => Number(meal.value)
  );
  //   console.log(total);
}
/*
Now it's time to add up all of the elements in the `total` array.  You can either use a loop or map through all of the elements and add them to a variable.  But JavaScript provides a useful `reduce()` function that we can chain on our current expression.

Add the .reduce() function to the `Array.from...` expression.
*/
