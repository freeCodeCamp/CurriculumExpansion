const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

/*
When defining an arrow function with a single argument, the parentheses can be omitted:
```
const greeting = name => `Hello ${name}!`;
```
Define a function `highPrecedence` which takes a single argument `str` and returns it.
*/
