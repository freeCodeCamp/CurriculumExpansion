const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => {
  const properCaseArr = (str) => str.split(' ').map((word) => getSentenceCase(word));
};

// Call join on properCaseArr to convert the array to a string and return the result.

