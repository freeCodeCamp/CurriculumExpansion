document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = total - maxCalories;
  const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';
}
/*
If you look near the bottom of the HTML page, notice that there is currently an empty div: `<div id="output"></div>`.

We will be inserting output inside this div, telling the user if they are in a calorie surplus or deficit.

Create a variable named `output` and set it equal to this document element with the id of `output`.
*/
