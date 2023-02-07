document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = document.getElementsByClassName('cal-control');
}
/*
To make the the document objects easier to handle, let's turn them into an array.
Wrap the `document.getElementsByClassName('cal-control')` portion of your code in an `Array.from()` method.
*/
