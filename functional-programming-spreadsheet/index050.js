const infixToFunction = {};

const addVar = function(x, y) {
  return x + y;
};

/*
This is possible because the anonymous function has been immediately assigned to a value - this is effectively the same as using a named function.
Rewrite the above using ES6's arrow syntax:
```
const fn = (x, y) => x;
```
Note that the value is returned implicitly.
*/
