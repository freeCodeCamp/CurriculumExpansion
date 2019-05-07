document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'));
  const meal = total[0];
}
/*
Now enter in a number in the Breakfast input and then console log `meal.value`.  You'll notice that it displays what you entered.
*/
