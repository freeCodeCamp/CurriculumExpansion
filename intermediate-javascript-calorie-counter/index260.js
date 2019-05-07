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

  const result = document.createElement('h3');
}
/*
Next, we create a text node that we will later append to the `result` element.

JavaScript has a function called `createTextNode()` to accomplish this.  For example:
`const myText = document.createTextNode("Hello world!")`

Create a variable named `resultText` and set it equal to a text node, leave the string empty for now.
*/
