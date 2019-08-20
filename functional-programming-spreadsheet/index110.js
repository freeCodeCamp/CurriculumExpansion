const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);

/*
Now use a 4 argument anonymous function as the second argument to `replace`.
It takes the function from `infixToFunction` indexed by its third argument, and passes `parseFloat` of its second and fourth argument to that function.
*/
