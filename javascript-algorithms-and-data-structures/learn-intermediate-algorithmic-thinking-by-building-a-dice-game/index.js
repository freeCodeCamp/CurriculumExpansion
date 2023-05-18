const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const diceDivs = document.querySelectorAll("#dice > div");
const currentRoundText = document.getElementById("current-round");
const currentRoundRollsText = document.getElementById("current-round-rolls");
const totalScoreText = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");
let isModalShowing = false;
// Good review of selection Sort algorithm
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

const getMaxNumOfConsecutives = (sortedArr) => {
  let currentCount = 0;
  let maxCount = 0;

  for (let prev = 0, next = 1; next < sortedArr.length; prev++, next++) {
    if (sortedArr[next] - sortedArr[prev] === 1) {
      if (currentCount === 0) {
        currentCount++;
      }
      currentCount++;
    }
    if (
      sortedArr[next] - sortedArr[prev] > 1 ||
      next === sortedArr.length - 1
    ) {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }
  return maxCount;
};

const sumOfArrElements = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

// Return an object with number of die having same value
// getNumOfSameDiceValues([4, 4, 4, 6, 6]) should return {4: 3, 6: 2}
const getNumOfSameDiceValues = (sortedArr) => {
  const numOfSameDiceValues = {};
  let count = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    let previous = sortedArr[i - 1];
    if (previous === sortedArr[i]) {
      if (count === 0) {
        count++;
      }
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
  }

  resetRadioInputs() {
    scoreInputs.forEach((element) => {
      element.disabled = true;
      element.checked = false;
    });
    scoreSpans.forEach((element) => {
      element.textContent = "";
    });
  }

  rollDice() {
    diceDivs.forEach((element, index) => {
      this.diceValues[index] = element.textContent = Math.ceil(
        Math.random() * 6
      );
    });
    this.rollsInCurrentRound++;
  }

  updateStatsUI() {
    /**
     * After keeping a set of dice in the 6th round, the current round text changes to 7 just before the game over confirmation message pops up.
     * This change prevents updating that text without messing up the other logic that relies on the current round being greater that 6
     * if (this.currentRound <= 6) currentRoundText.textContent = this.currentRound;
     *
     * We can point out this error to campers and create a step where campers add that if statement
     *
     *
     */
    currentRoundText.textContent = this.currentRound;
    totalScoreText.textContent = this.totalScore;
    currentRoundRollsText.textContent = this.rollsInCurrentRound;
  }

  updateScoreUI() {
    const scoreboard = scoreHistory;
    const scoreEntry = document.createElement("li");
    // I believe this is the first time Object.entries has been introduced
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

    // I believe this is the first time Object.values has been introduced
    const numOfSameDiceValues = Object.values(
      getNumOfSameDiceValues(sortedDiceValues)
    );

    this.validScoreOptions = {
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
      if (sumOfArrElements(numOfSameDiceValues) === 5) {
        this.validScoreOptions["full-house"] = 25;
      }
    }

    if (totalConsecutives >= 4) {
      this.validScoreOptions["small-straight"] = 30;
    }

    if (totalConsecutives === 5) {
      this.validScoreOptions["large-straight"] = 40;
    }
  }

  enableValidScoreInputs() {
    const availableScoreInputs = scoreInputs;
    const availableRadioScores = scoreSpans;
    // I believe this is the first time Object.keys has been introduced
    const validScoreOptionsKeys = Object.keys(this.validScoreOptions);

    for (let i = 0; i < validScoreOptionsKeys.length; i++) {
      for (let j = 0; j < availableScoreInputs.length; j++) {
        if (validScoreOptionsKeys[i] === availableScoreInputs[j].value) {
          availableScoreInputs[j].disabled = false;
          availableRadioScores[j].textContent = `, score= ${
            this.validScoreOptions[availableScoreInputs[j].value]
          }`;
        }
      }
    }
  }

  isKeepScoreSuccess() {
    const allScoreInputs = scoreInputs;

    for (let i = 0; i < allScoreInputs.length; i++) {
      if (allScoreInputs[i].checked) {
        const currentValue = allScoreInputs[i].value;
        const currentScore = this.validScoreOptions[currentValue];
        this.totalScore += currentScore;
        this.scoreHistory.push({ [allScoreInputs[i].value]: currentScore });
        this.currentRound++;
        this.rollsInCurrentRound = 0;

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

rollDiceBtn.addEventListener("click", (e) => {
  if (game.currentRound <= 6) {
    game.rollDice();
    game.resetRadioInputs();
    game.generateValidScoreOptions();
    game.enableValidScoreInputs();
    game.updateStatsUI();
    keepScoreBtn.disabled = false;

    if (game.rollsInCurrentRound % 3 === 0) {
      e.target.disabled = true;
    }
  }
});

keepScoreBtn.addEventListener("click", (e) => {
  if (game.currentRound <= 6 && game.isKeepScoreSuccess()) {
    game.resetRadioInputs();
    game.updateStatsUI();
    game.updateScoreUI();
    rollDiceBtn.disabled = false;
    e.target.disabled = true;
  }

  if (game.currentRound > 6) {
    // Give DOM some time to complete manipulation then check & run gameOver
    setTimeout(game.gameOver, 100);
  }
});

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