const isSpam = msg => {
  const re = /./;

  return false;
  /*
  Instead of always returning `false`, we want our spam filter to check the input against the regex, returning true or false depending on whether a match was found.

  Regex has the perfect method for us: `test`. Use it to test our `msg` input string.

  Syntax: `<regex>.test(<input>)`
  */
};
