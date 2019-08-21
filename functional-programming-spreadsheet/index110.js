const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);

/*
Replace the second argument of `str.replace` with an anonymous function, which takes `match`, `arg1`, `fn`, and `arg2`, and returns `infixToFunction["+"]`.
*/
