document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    function(meal) {
      return Number(meal.value);
    }
  );
}
/*
Now let's simplify the function by refactoring it to use arrow functions.  As an example, `function(x) {return x*x} can be refactored as `x => x*x`.
*/
