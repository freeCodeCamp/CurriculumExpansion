"use strict";

// Sort the array elements in ascending order
// Important test case: input array should not change as arrays are passed by reference
const selectionSort = (arr) => {
  let arrDeepCopy = [];
  arr.forEach((element, index) => {
    arrDeepCopy[index] = element;
  });

  for (let i = 0; i < arrDeepCopy.length - 1; i++) {
    let smallest = arrDeepCopy[i];
    let smallestPos = i;
    for (let j = i + 1; j < arrDeepCopy.length; j++) {
      if (arrDeepCopy[j] < smallest) {
        smallest = arrDeepCopy[j];
        smallestPos = j;
      }
    }
    let temp = arrDeepCopy[i];
    arrDeepCopy[i] = smallest;
    arrDeepCopy[smallestPos] = temp;
  }
  return arrDeepCopy;
};

// Return the maximum number of consecutives
// getMaxNumOfConsecutives([2, 3, 3, 3, 4]) should return 3
// getMaxNumOfConsecutives([2, 3, 3, 7, 8, 9, 10]) should return 4
const getMaxNumOfConsecutives = (sortedArr) => {
  let currentCount = 0;
  let maxCount = 0;

  for (let prev = 0, next = 1; next < sortedArr.length; prev++, next++) {
    if (sortedArr[next] - sortedArr[prev] === 1) {
      if (currentCount === 0) currentCount++;
      currentCount++;
    }
    if (
      sortedArr[next] - sortedArr[prev] > 1 ||
      next === sortedArr.length - 1
    ) {
      if (currentCount > maxCount) maxCount = currentCount;
      currentCount = 0;
    }
  }
  return maxCount;
};

// Sum the elements of an integer array
const sumOfArrElements = (arr) => {
  let arrElementsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrElementsSum += arr[i];
  }
  return arrElementsSum;
};

// Return an object with number of die having same value
// getNumOfSameDiceValues([4, 4, 4, 6, 6]) should return {4: 3, 6: 2}
const getNumOfSameDiceValues = (sortedArr) => {
  const numOfSameDiceValues = {};
  let count = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    let previous = sortedArr[i - 1];
    if (previous === sortedArr[i]) {
      if (count === 0) count++;
      count++;
    }
    if (previous !== sortedArr[i] || i === sortedArr.length - 1) {
      if (count > 0) numOfSameDiceValues[previous] = count;
      count = 0;
    }
  }
  return numOfSameDiceValues;
};

// Game class to encapsulate all the properties and methods related to game
class Game {
  constructor() {
    this.diceValues = [0, 0, 0, 0, 0];
    this.rollsInCurrentRound = 0;
    this.totalScore = 0;
    this.currentRound = 1;
    this.scoreHistory = [];
    this.validScoreOptions = {};
    this.isDiceSelectionEnabled = false;
  }

  resetRadioInputs() {
    document.querySelectorAll("#score-options input").forEach((element) => {
      element.disabled = true;
      element.checked = false;
    });
    document.querySelectorAll("#score-options span").forEach((element) => {
      element.textContent = "";
    });
  }

  selectAllDice() {
    document.querySelectorAll("#dice > div").forEach((element) => {
      element.classList.add("selected");
    });
  }

  startDiceSelector() {
    document.querySelector("#dice").addEventListener("click", (event) => {
      if (this.isDiceSelectionEnabled === true)
        event.target.classList.toggle("selected");
    });
  }

  rollSelectedDice() {
    const dieDivs = document.querySelectorAll("#dice > div");
    dieDivs.forEach((element, index) => {
      if (element.classList.contains("selected"))
        this.diceValues[index] = element.textContent = Math.ceil(
          Math.random() * 6
        );
    });
    this.rollsInCurrentRound++;
  }

  updateStatsUI() {
    document.querySelector("#current-round").textContent = this.currentRound;
    document.querySelector("#total-score").textContent = this.totalScore;
    document.querySelector(
      "#current-round-rolls"
    ).textContent = this.rollsInCurrentRound;
  }

  updateScoreUI() {
    const scoreboard = document.querySelector("#score-history");
    const scoreEntry = document.createElement("li");
    const [type, score] = Object.entries(
      game.scoreHistory[game.scoreHistory.length - 1]
    )[0];

    const formattedScoreType = (type[0].toUpperCase() + type.slice(1)).replace(
      /-/g,
      " "
    );

    const formattedScore = document.createTextNode(
      `${formattedScoreType}: ${score}`
    );
    scoreEntry.appendChild(formattedScore);
    scoreboard.appendChild(scoreEntry);
  }

  generateValidScoreOptions() {
    const sortedDiceValues = selectionSort(this.diceValues);
    const sumOfDiceValues = sumOfArrElements(this.diceValues);
    const totalConsecutives = getMaxNumOfConsecutives(sortedDiceValues);
    const numOfSameDiceValues = Object.values(
      getNumOfSameDiceValues(sortedDiceValues)
    );

    this.validScoreOptions = {
      chance: sumOfDiceValues,
      none: 0,
    };

    for (let i = 0; i < numOfSameDiceValues.length; i++) {
      if (numOfSameDiceValues[i] >= 3) {
        this.validScoreOptions["three-of-a-kind"] = sumOfDiceValues;
        break;
      }
    }

    if (numOfSameDiceValues[0] >= 4)
      this.validScoreOptions["four-of-a-kind"] = sumOfDiceValues;

    if (numOfSameDiceValues.length === 2) {
      if (sumOfArrElements(numOfSameDiceValues) === 5)
        this.validScoreOptions["full-house"] = 25;
    }

    if (totalConsecutives >= 4) this.validScoreOptions["small-straight"] = 30;

    if (totalConsecutives === 5) this.validScoreOptions["large-straight"] = 40;

    if (numOfSameDiceValues[0] === 5) this.validScoreOptions["yahtzee"] = 50;
  }

  enableValidScoreInputs() {
    const availableScoreInputs = document.querySelectorAll(
      "#score-options input"
    );
    const availableRadioScores = document.querySelectorAll(
      "#score-options span"
    );
    const validScoreOptionsKeys = Object.keys(this.validScoreOptions);

    for (let i = 0; i < validScoreOptionsKeys.length; i++) {
      for (let j = 0; j < availableScoreInputs.length; j++) {
        if (validScoreOptionsKeys[i] === availableScoreInputs[j].value) {
          availableScoreInputs[j].disabled = false;
          availableRadioScores[j].textContent =
            ", score = " +
            this.validScoreOptions[availableScoreInputs[j].value];
        }
      }
    }
  }

  isKeepScoreSuccess() {
    const allScoreInputs = document.querySelectorAll("#score-options input");
    const allRadioLabels = document.querySelectorAll("#score-options label");

    for (let i = 0; i < allScoreInputs.length; i++) {
      if (allScoreInputs[i].checked === true) {
        const currentValue = allScoreInputs[i].value;
        const currentScore = this.validScoreOptions[currentValue];
        this.totalScore += currentScore;
        this.scoreHistory.push({ [allScoreInputs[i].value]: currentScore });
        this.currentRound++;
        this.rollsInCurrentRound = 0;

        if (allScoreInputs[i].value !== "none") {
          allScoreInputs[i].remove();
          allRadioLabels[i].remove();
        }
        return true;
      }
    }
    alert("Please select a score.");
    return false;
  }

  gameOver() {
    if (
      confirm(
        `You scored ${game.totalScore} points. Do you want to play again?`
      )
    )
      location.reload();
  }
}

const game = new Game();
game.startDiceSelector();

const rollDiceBtn = document.querySelector("#roll-dice-btn");
const keepScoreBtn = document.querySelector("#keep-score-btn");

rollDiceBtn.addEventListener("click", function (event) {
  if (game.currentRound <= 6) {
    game.rollSelectedDice();
    game.resetRadioInputs();
    game.generateValidScoreOptions();
    game.enableValidScoreInputs();
    game.updateStatsUI();
    game.isDiceSelectionEnabled = true;
    keepScoreBtn.disabled = false;
    if (game.rollsInCurrentRound % 3 === 0) event.target.disabled = true;
  }
});

keepScoreBtn.addEventListener("click", function (event) {
  if (game.currentRound <= 6 && game.isKeepScoreSuccess()) {
    game.resetRadioInputs();
    game.selectAllDice();
    game.updateStatsUI();
    game.updateScoreUI();
    game.isDiceSelectionEnabled = false;
    rollDiceBtn.disabled = false;
    event.target.disabled = true;
  }
  if (game.currentRound > 6)
    // Give DOM some time to complete manipulation then check & run gameOver
    setTimeout(game.gameOver, 100);
});
