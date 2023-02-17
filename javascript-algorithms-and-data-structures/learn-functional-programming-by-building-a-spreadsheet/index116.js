const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn]
  );

/*
`arg1` and `arg2` are the numbers inputed by the user in a string such as "1+3".
Pass `parseFloat(arg1)` and `parseFloat(arg2)` as the arguments to `infixToFunction[fn]` (remember `infixToFunction[fn]` is a function).
*/
