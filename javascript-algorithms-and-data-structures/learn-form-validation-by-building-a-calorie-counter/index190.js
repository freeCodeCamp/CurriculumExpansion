document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
/*
Now that we have the `total` number of calories that the user entered.  We need to determine the maximum calories they should consume.

Look at the form and notice that there are radio buttons for Female and Male.  If Female is selected, the maximum calories a normal Female should consume is 2000.  If Male is selected, the maximum is 2500.

If you inspect the Female radio button you will notice its id: `<input type="radio" name="sex" id="female" value="F" checked="">`

Create a variable named `maxCalories` and set it equal to the document element with the id of `female`.  This is similar to how you reference the element with the `id` of `calorie-form` at the beginning of this file.

*/
