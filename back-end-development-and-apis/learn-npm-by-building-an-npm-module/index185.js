const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

const getProperCase = (str) => {
  const properCaseArr = (str) => str.split(' ').map((word) => getSentenceCase(word));

  return properCaseArr.join(' ');
};

/*
Use `module.exports` to export your four functions so that users can import and use them after installing your npm package.
For example:
```
module.exports = {
  getArrLength,
  sumArr
};
```
*/
