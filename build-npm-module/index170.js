const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

// Create getProperCase() function which take a string variable `str` and return proper case of this string.
// This means you have to convert every word's first character to upper case and other characters to lower case.
// First we can split the input string by space, and call our getSentenceCase on each word, store the result array in properCaseArr.
