document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {}
/*
When a form is submitted, the browser will try to submit it to a server and reload the page.
We want to prevent this from happening and do our own processing on the client side.
Prevent the default behavior of the form submit event by calling `e.preventDefault()` inside of the `calculate` function.
*/
