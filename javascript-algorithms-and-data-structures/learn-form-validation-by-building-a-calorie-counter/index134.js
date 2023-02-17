document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    function(meal) {
      return meal.value;
    }
  );

  // console.log(total);
}
/*
Since eventually we'll be adding all of the meal calories in the `total` array, explicitly convert `meal.value` into a number by wrapping it in the `Number()` function.
*/
