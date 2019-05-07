document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;
}
/*
Now that we have `total` and `maxCalories`, we need to find out the difference between them.

Create a variable named `difference` and set it equal to `total - maxCalories`
*/
