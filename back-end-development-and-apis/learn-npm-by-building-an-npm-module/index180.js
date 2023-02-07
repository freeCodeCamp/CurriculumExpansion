const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => {
  const properCaseArr = (str) => str.split(' ').map((word) => getSentenceCase(word));
};

// Call the `join()` method on `properCaseArr` to convert the array into a string and return the result.

