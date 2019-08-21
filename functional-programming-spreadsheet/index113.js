const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction["+"]
  );

/*
Change the `"+"` in `infixToFunction` to `fn`.
`fn` is the operator that the user inputs - we use `infixToFunction` to get the function that corresponds to it.
*/
