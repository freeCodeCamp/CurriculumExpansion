document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = total - maxCalories;
}
/*
If `difference` is positive, the total calories the user ate is more than the `maxCalories` recommended, or a calories surplus -- otherwise, if `difference` is negative, the user has a calorie deficit.

To determine if this is a calorie surplus or deficit, create a variable named `surplusOrDeficit` to determine if the difference is positive (`difference > 0`).

If it is positive, `surplusOrDeficit` should be set equal to the string "Surplus", and "Deficit" if negative.

Use the same ternary syntax that you used to determine `maxCalories`.
*/
