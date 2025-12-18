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

const inputValidator = username => {
  const minLength = 3;
  const maxLength = 17;
  const isValidInput = username =>
    username.length >= minLength && username.length <= maxLength;

  do {
    if (isValidInput(username)) {
      console.log('Valid username entered...proceed');
      return true;
    }
  } while(username.trim() === '');

  console.log('Invalid username. It should be between 3 and 17 characters');

  return false;
}

const keypad = {
  1: {
    isLocked: true,
  },
  2: {
    isLocked: true,
  },
  3: {
    isLocked: true,
  }
};