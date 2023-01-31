const getUpperCase = (str) => str.toUpperCase();

const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
  const lowerStr = getLowerCase(str);
};

/*
Now let's convert the first character to uppercase. Use `charAt()` to get the first character of the lowercase string, convert it to uppercase.
Then, use `slice()` to get the other characters of the string, and use `+` to concat them.
Finally, return the result.
*/
