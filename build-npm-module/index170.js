const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);

  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
};

/*
Now let's work on a function that returns a proper case string.
Proper case means that the first character of every word is uppercase and the rest are lowercase.
Create an empty `getProperCase()` function that takes `str` as a parameter.
*/
