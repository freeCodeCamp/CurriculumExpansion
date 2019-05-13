const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => str.split(' ').map((word) => getSentenceCase(word)).join(' ');

// You should then use node.js `module.exports` to export these four functions so that users can import and use your package's function
