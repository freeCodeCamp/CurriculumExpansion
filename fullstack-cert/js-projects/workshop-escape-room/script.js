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