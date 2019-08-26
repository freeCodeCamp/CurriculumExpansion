const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => {};

// Split the input `str` into an array of words, call `getSetenceCase` on each word, and store the resulting array as a local variable called `properCaseArr`.
