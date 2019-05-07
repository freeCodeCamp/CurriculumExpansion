document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {}
/*
REALLY NEED HELP ON THE EXPLANATION HERE

When a form is submitted, the browser will by default try to submit it to a server.

In our case, we want to prevent this from happening and do our own processing on the client side.

Luckily, `e` event parameter that the calculate() function receives has a `preventDefault` function that we can use.

Prevent the default behavior of the form submit event by calling `e.preventDefault()`

*/
