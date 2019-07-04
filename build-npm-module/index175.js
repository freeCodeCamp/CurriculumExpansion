const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const properCaseArr = (str) => str.split(' ').map((word) => getSentenceCase(word));

// Create getProperCase() function to join properCaseArr into spce separated sentence.

