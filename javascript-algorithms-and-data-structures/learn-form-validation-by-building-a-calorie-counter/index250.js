document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = total - maxCalories;
  const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';

  const output = document.getElementById('output');
}
/*
Now it's time to create the HTML elements that we will add inside of `output`.

To create an element, use `createElement()`, for example:

`const myHeading1 = document.createElement('h1')`

Create an `h3` element and assign it to a variable named `result`.
*/
