const infixToFunction = {};

function add(x, y) {
  return x + y;
}

const addVar = add;

/*
Anonymous functions are functions without names - they are used only once and then forgotten.
The syntax is the same as for normal functions but without the name:
```
function(x) {
  return x
}
```
Make the function `add` anonymous and remove the `addVar` definition (as `add` isn't defined anymore).
*/
