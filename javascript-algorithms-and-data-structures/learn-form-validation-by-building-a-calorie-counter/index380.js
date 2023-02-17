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
    `${Math.abs(difference)} Calorie ${surplusOrDeficit}`
  );

  result.appendChild(resultText);
  output.appendChild(result);

  const line = document.createElement('hr');
  output.appendChild(line);
}
/*
Let's create a few more HTML elements to add to the `output`.

Create an `h4` element and assign it to a variable named `recommended`.
*/
