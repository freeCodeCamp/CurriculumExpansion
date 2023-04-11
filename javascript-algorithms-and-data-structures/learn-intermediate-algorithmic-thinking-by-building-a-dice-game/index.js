// targets the radio buttons and the spans
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");

// square boxes that display the dice values
const diceButtons = document.querySelectorAll("#dice > button");

// targets the current round and rolls
const currentRoundText = document.getElementById("current-round");
const currentRoundRollsText = document.getElementById("current-round-rolls");

// targets the score history and total score
const totalScoreText = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

// targets the roll dice and keep score buttons
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");

// deals with the rules modal
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

// deals with the modal that shows up the game rules
let isModalShowing = false;

// initial values
let displayArray = [];
let score = 0;
let totalScore = 0;

let round = 1; // max 6 rounds
let rolls = 0; // max 3 rolls each round

/**
 * ! this is the function that rolls the dice & updates the dice display
 */

const rollDice = () => {
  displayArray = [];
  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    displayArray.push(randomDice);
  }

  diceButtons.forEach((dice, index) => {
    dice.textContent = displayArray[index];
  });
};

/**
 * ! this is the function that updates the rolls and rounds
 */

const updateStats = () => {
  // update the rolls and rounds
  currentRoundRollsText.innerHTML = rolls;
  currentRoundText.innerHTML = round;
};

/**
 * ! Update Score & history
 */

const updateScore = (selectedValue, achieved) => {
  totalScore += parseInt(selectedValue);
  totalScoreText.innerHTML = totalScore;

  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

/**
 * ! this will help to reset the radio input options
 */

const resetRadioOption = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};

/**
 * ! this function will update the radio button with disabled, score and text attributes
 */

const updateRadioOption = (optionNode, score) => {
  scoreInputs[optionNode].disabled = false;
  scoreInputs[optionNode].value = score;
  scoreSpans[optionNode].textContent = `, score = ${score}`;
};

/**
 * ! This will help us detect small / large straights
 */

const straightDetector = (arr) => {
  const sortNumbers = arr.sort((a, b) => a - b);
  const uniqueNumbers = [...new Set(sortNumbers)];
  const stringifyArray = uniqueNumbers.join("");

  // SMALL STRAIGHT POSSIBILITIES
  // 1,2,3,4
  // 2,3,4,5
  // 3,4,5,6

  // LARGE STRAIGHT POSSIBILITIES
  // 1,2,3,4,5
  // 2,3,4,5,6

  const smallStraightLogic = ["1234", "2345", "3456"];
  const largeStraightLogic = ["12345", "23456"];

  if (smallStraightLogic.includes(stringifyArray)) {
    updateRadioOption(3, 30);
  }
  if (largeStraightLogic.includes(stringifyArray)) {
    updateRadioOption(4, 40);
  }
  updateRadioOption(5, 0);
};

/**
 * ! This will help us detect - 3 of a kind / 4 of a kind
 */

const getHighestDuplicates = (arr) => {
  const counts = {};

  // Count the occurrences of each number in the array
  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  // Find the highest count of duplicates that is at least 3 or 4
  let highestCount = 0;
  for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestCount) {
      highestCount = count;
    }
    if (count >= 4 && count > highestCount) {
      highestCount = count;
    }
  }

  // according to rules, it should be sum of all 5 dices
  const sumOfAllDices = displayArray.reduce((a, b) => a + b, 0);

  // Return the highest duplicates only if there are at least three or four of them
  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDices);
  }
  if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDices);
  }
  updateRadioOption(5, 0);
};

/**
 * ! This will help us detect full house
 */

const detectFullHouse = (arr) => {
  // condiiton, 3 of a kind and 2 of a kind
  const counts = {};

  // Count the occurrences of each number in the array
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  /**
   * ! Check if there are three of one number and two of another number
   * ? Have campers iterate through object first, then refactor this to
   * ? use Object.values().includes() instead. 👇
   */

  // let hasThreeOfAKind = false;
  // let hasPair = false;

  // for (const num in counts) {
  //   if (counts[num] === 3) {
  //     hasThreeOfAKind = true;
  //   } else if (counts[num] === 2) {
  //     hasPair = true;
  //   }
  // }

  const hasThreeOfAKind = Object.values(counts).includes(3);
  const hasPair = Object.values(counts).includes(2);

  if (hasThreeOfAKind && hasPair) {
    updateRadioOption(2, 25);
  }
  updateRadioOption(5, 0);
};

/**
 * ! This will help us run all the functions that detect the outcome of the roll
 */

const findRollResult = (arr) => {
  straightDetector(arr);
  getHighestDuplicates(arr);
  detectFullHouse(arr);
};

/**
 * ! This function will help us reset the game
 */

const resetGame = () => {
  displayArray = [0, 0, 0, 0, 0];
  score = 0;
  totalScore = 0;
  round = 1;
  rolls = 0;

  diceButtons.forEach((dice, index) => {
    dice.textContent = displayArray[index];
  });

  totalScoreText.innerHTML = totalScore;
  scoreHistory.innerHTML = "";

  currentRoundRollsText.innerHTML = rolls;
  currentRoundText.innerHTML = round;

  resetRadioOption();
};

/**
 * ! this is the trigger for the app to work
 */

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    window.alert(
      "You have made three rolls this round. Please select a score."
    );
  } else {
    rolls++;
    resetRadioOption();
    rollDice();
    updateStats();
    findRollResult(displayArray);
  }
});

/**
 * ! this is the function that triggers the rules button
 **/

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  if (isModalShowing) {
    rulesBtn.textContent = "Hide Rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show Rules";
    rulesContainer.style.display = "none";
  }
});

/**
 * ! this will help us keep the score and move forward to the next round
 */

keepScoreBtn.addEventListener("click", () => {
  let selectedValue;
  let achieved;

  for (const radioButton of scoreInputs) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
      break;
    }
  }

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOption();
    updateScore(selectedValue, achieved);
    if (round >= 6) {
      setTimeout(() => {
        window.alert(`Game Over! Your total score is ${totalScore}`);
        resetGame();
      }, 500);
    }
  } else {
    window.alert("Please select an option or roll the dice");
  }
});
