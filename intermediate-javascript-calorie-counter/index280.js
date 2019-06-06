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

  const resultText = document.createTextNode(difference);
  //   console.log(resultText);
}
/*

Notice how if `total` is less than `maxCalories`, `difference` is a negative number.

We want to show the absolute value of the difference so it displays "300" rather than "-300".

Wrap the `difference` in a `Math.abs()` function.
*/
