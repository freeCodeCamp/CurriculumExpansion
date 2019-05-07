document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    meal => meal.value
  );
}
/*
Since eventually we'll be adding all of the meal calories in the `total` array, explicitly convert `meal.value` into a number by wrapping it in the `Number()` function.

If you desire, you can now check your progress by adding `console.log(total)`, entering in values in the form, and then push the Calculate button.  You will see the console log an array of the values that you entered, pretty cool!
*/
