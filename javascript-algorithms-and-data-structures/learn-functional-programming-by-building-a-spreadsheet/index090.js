const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

/*
Use arrow function syntax to define a function `infixEval` which takes `str` and `regex` as arguments and returns `str.replace(regex, "")`.
*/
