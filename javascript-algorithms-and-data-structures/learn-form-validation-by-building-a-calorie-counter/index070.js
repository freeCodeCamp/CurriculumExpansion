document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
}
/*
If you inspect the inputs in the form, you will notice that they have the class name `cal-control`.

To access elements with a certain class name, we use the `getElementsByClassName()` method.

Similar to how you referenced the calorie form above (`document.getElementById('calorie-form')`), create a reference to the elements with the class name `cal-control`
*/
