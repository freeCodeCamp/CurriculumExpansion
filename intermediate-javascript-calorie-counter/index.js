const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  // Remove +, -, and whitespace from string
  /*
    Could teach the .split() and .join()
    methods to do this with a for loop, then refactor
    to use regex. Might also be able to have learners
    practice with the .reverse() method here just for fun.

    const strArray = str.split('');
    const cleanStrArray = [];
    
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] !== '+' && strArray[i] !== '-' && strArray[i] !== ' ') {
        cleanStrArray.push(strArray[i]);
      }
    }

    return cleanStrArray.join('');
  */

  const regex = /[+-\s]/g; // Explain \s for whitespace and global flag
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  /*
    Check exponential notation and
    return matches to display an error message

    - Have learners search for exponential notation with /e/
    - Explain that number inputs allow e and E, and teach the i flag for case insensitivity: /e/i
    - Explain that number inputs only allow e between digits. Match e between specific digits: /1e3/i
    - Explain character classes to search for digits 0-9. Refactor to /[0-9]e[0-9]/i
    - Explain the + character to match 1 or more of whatever precedes it: /[0-9]+e[0-9]+/i
    - Explain that \d matches digits, and can replace [0-9]. Refactor to /\d+ed+/i
  */
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  // Could be simplified with template strings
  // const targetId = '#' + entryDropdown.value;
  // const targetInputContainer = document.querySelector(targetId + ' ' + '.input-container');
  const targetInputContainer = document.body.querySelector(`#${entryDropdown.value} .input-container`);
  const index = targetInputContainer.querySelectorAll('input[type="text"]').length; // Could also use targetInputContainer.querySelectorAll('input').length / 2
  const HTMLString = `
  <label for="${entryDropdown.value}-${index}-name">Entry ${index} Name</label>
  <input type="text" id="${entryDropdown.value}-${index}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${index}-calories">Entry ${index} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${index}-calories"
    placeholder="Calories"
  />`; // Labels need to be included for accessibility
  
  targetInputContainer.innerHTML += HTMLString;
}

function calculateCalories(e) {
  e.preventDefault(); // Might be the first time preventDefault() is introduced
  isError = false; // Reset global error flag
  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
  // Add this node to an array to process like other inputs, briefly explain the difference between arrays and node lists
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  
  // Exit early if there is a detected error
  if (isError) return;

  const remainingCalories = budgetCalories - (breakfastCalories + lunchCalories + dinnerCalories + snacksCalories) + exerciseCalories;
  output.innerText = `${remainingCalories} Calories Remaining`;
  output.classList.remove('hide');
}

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (let i = 0; i < list.length; i++) {
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    } else {
      calories += Number(currVal);
    }
  }

  return calories;
}

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (let i = 0; i < inputContainers.length; i++) {
    inputContainers[i].innerHTML = ''; // element.remove() works, too
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}

addEntryButton.addEventListener("click", addEntry);
clearButton.addEventListener("click", clearForm);
calorieCounter.addEventListener("submit", calculateCalories);
