document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = total - maxCalories;
  const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';

  const output = document.getElementById('output');

  const result = document.createElement('h3');
  result.className = 'green-text';
  const resultText = document.createTextNode(
    `${Math.abs(difference)} Calorie ${surplusOrDeficit}`
  );

  result.appendChild(resultText);
  output.appendChild(result);

  const line = document.createElement('hr');
  output.appendChild(line);

  const recommended = document.createElement('h4');
  const recommendedText = document.createTextNode(
    `${maxCalories} Recommended Calories`
  );

  recommended.appendChild(recommendedText);
  output.appendChild(recommended);

  const consumed = document.createElement('h4');
  consumed.innerHTML = `${total} Consumed Calories`;
  output.appendChild(consumed);

  output.setAttribute('class', 'bordered-class');
  output.style.backgroundColor = '#FFF9C4';
}
/*
When the user clicks the "Add Entry" button, they should be provided with additional text inputs to enter in a food name and calorie amount.
In the HTML document, notice that the "Add Entry" button has the `id` attribute `add`: `<button type="button" class="btn-add" id="add">`
Get a reference to the `document` element with the ID `add`.

When the user clicks the "Add Entry" button, they should be provided with additional text inputs to enter in a food name and calorie amount.  These will be included in the the `calculate()` function.

In the HTML document, notice that the "Add Entry" button has the `id` attribute `add`: `<button type="button" class="btn-add" id="add">`

Get a reference to the `document` element with the ID `add` and set its `onclick` property  it equal to a blank function `function(){}`
*/
