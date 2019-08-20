const infixToFunction = {
  "+": addVar
};

const addVar = (x, y) => x + y;

/*
Replace `addVar` with its value in `infixToFunction` and remove its definition.
Because `addVar` is immutable we can always replace it with its definition (whether in reasoning or in code) - we don't have to keep track of its value.
*/
