document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked;
}
/*
`document.getElementById('female').checked` will return either `true` or `false`.  If it's `true` we want to set `maxCalories` to `2000`, otherwise it should be `2500`.

We will be using a ternary operator to assign the value of `maxCalories`.

A ternary operator has the following syntax:
`condition ? expressionTrue : expressionFalse`

For example:
`(5 - 3 == 4) ? "Yes": "No"`

Since (5 - 3 == 4) evaluates to `false`, `No` will be returned.

In a traditional `if else` statement, it will be the equivalent to
```
if (5 - 3 == 4) {
  return 'Yes';
} else {
  return 'No';
}
```

Complete the ternary operator with `document.getElementById('female').checked` to return `2000` if it checked and `2500` if not.
*/
