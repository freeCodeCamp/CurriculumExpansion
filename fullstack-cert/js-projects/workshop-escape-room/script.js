const progressState = {
  1: {
    isSolved: false
  },
  2: {
    isSolved: false
  },
  3: {
    isSolved: false
  },
};

const countdown = () => {
  const answerToLifeMeaningUniverse = 42;
  for (let i = 120; i > 0; i--) {
    if (i === answerToLifeMeaningUniverse) {
      return true;
    }
  }
  return false;
}

const patternMatch = (text, pattern) => {
  let left = 0;
  let right = text.length;
  const patternOffset = pattern.length;
  while (left < right) {
    if (text.slice(left, left + patternOffset) === pattern ||
        text.slice(right, right - patternOffset) === pattern) {
      return true;
    }
    left++;
    right--;
  }
  return false;
}

const inputValidator = () => {
  const minUsernameSize = 3;
  let username;
  do {
    username = prompt('Please enter a valid username');
  } while (username.trim() === '' || username.length < minUsernameSize);

  return username;
}