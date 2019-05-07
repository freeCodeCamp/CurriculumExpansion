document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'));
}
/*
To get a better sense of what we'll be doing, let's examine one of the of the input items.

Create a variable named `meal` and set it equal to the first index of `total` (`total[0]`), this would be the input for Breakfast on the form.
*/
