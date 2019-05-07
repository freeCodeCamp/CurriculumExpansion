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
If the `difference` is positive, we know that the `total` calories that the user ate is more than the `maxCalories` recommended.  We consider this a calorie `Surplus`.  

If the `difference` is negative, we know that the `total` calories is less than the `maxCalories` recommended.  We consider this a calorie `Deficit`. 

To determine if this is a calorie surplus or deficit, create a variable named `surplusOrDeficit` to determine if the difference is positive (`difference > 0`).  If it is positive,`surplusOrDeficit` should be set equal to `Surplus`, and `Deficit` if negative. We will use this `surplusOrDeficit` variable later when printing the output.

Use the same ternary syntax that you used to determine `maxCalories`.
*/
