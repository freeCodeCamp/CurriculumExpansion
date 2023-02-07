document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked;
}
/*
Use a ternary operator to assign the value of `maxCalories`. A ternary operator has the following syntax: `condition ? expressionTrue : expressionFalse`.
For example, `(5 - 3 == 4) ? "Yes" : "No"` does the same thing as the following if else statement:
```
if (5 - 3 == 4) {
  return 'Yes';
} else {
  return 'No';
}
```
`document.getElementById('female').checked` will return either `true` if it is checked or `false` if it isn't. Use a ternary operator to return 2000 if it is is checked and 2500 if it is not.
*/
