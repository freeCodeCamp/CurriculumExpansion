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

  const resultText = document.createTextNode(
    Math.abs(difference) + ' Calorie ' + surplusOrDeficit
  );
}
/*
The data that we currently pass to `createTextNode()` is `Math.abs(difference) + ' Calorie ' + surplusOrDeficit`

Some people consider this a little cumbersome and prefer to use template literals instead.  

Template literals are enclosed in backticks (`/`/``), and JavaScript expressions and variables can be embedded by enclosing them in `${}`.

For example, `console.log(`Hello ${firstName}, today is ${Date.now()}`)` is the same as writing `console.log('Hello ' + firstName + ', today is ' + Date.now())`.

Convert the data inside of `createTextNode()` to be a template literal.
*/
