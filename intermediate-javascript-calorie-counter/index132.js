document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control')).map(
    function(meal) {}
  );
}
/*
Inside the function body, insert `return meal.value`, since it is the value of the individual `cal-control` inputs that we want.

If you want, console log `total` to see what results you are getting.  
*/
