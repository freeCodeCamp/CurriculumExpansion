const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => str.split(' ').map((word) => getSentenceCase(word)).join(' ');

module.exports = {
  getUpperCase,
  getLowerCase,
  getSentenceCase,
  getProperCase
};

// Now you have finished your case-coverter module. Let's publish it to NPM.
// Normally you would need to create your own account on npmjs.com.
// But for now, just use this demo account: username: camper, password: camper
