document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(meal => Number(meal.value))
    .reduce((accumulator, currentValue) => {
      /*code to run*/
    });
}
/*
Provide the number zero as the initial value of the reduce() function.
Here is an example of a reduce function with an empty object as its initial value:
```
arr.reduce((accumulator, currentValue) => 
  {/*code to run});
```
*/
