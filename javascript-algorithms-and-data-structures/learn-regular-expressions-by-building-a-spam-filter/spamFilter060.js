const isSpam = msg => {
  const blacklistRegexes = [
    /viagra/i,
    /free money/i,
    /work from home/i,
    /stock alert/i,
    /dear friend/i
  ];

  // return re.test(msg);

  /*
  To check for suspected spam, we only care if _some_ of the regexes match our message, not all of them.

  JavaScript has the `some` array method for just this purpose. `some` is a higher-order function that takes a callback as an argument. If the callback returns a truthy value for one or more elements of the array, `some` will return `true`. If no elements return a truthy value, `some` returns `false`.

  For example:

  ```javascript
  const myArray = [2, 4, 6, 8, 99];

  myArray.some(el => el % 2); // returns `true`, because one element is odd
  ```

  Uncomment the `return` statement and use `<array>.some` with `<regex>.test` to check if any of the `blacklistRegexes` match.
  */
};
