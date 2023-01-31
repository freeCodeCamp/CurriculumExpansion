document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female');
}
/*
Inspect the Female radio button again and notice that it has a `checked` attribute if it's checked: `<input type="radio" name="sex" id="female" value="F" checked="">`

Check to see if the Female radio button is checked or not by chaining on the `.checked` attribute to `document.getElementById('female')`.  

*/
