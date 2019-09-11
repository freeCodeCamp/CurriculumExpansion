---
id: 5d792534cac2dbe0a719ea7a
title: Step 26
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Set `noHigh` to `highPrecedence(str)` in `applyFn`.
</section>

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

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

const spreadsheetFunctions = {
  "": x => x
};

const applyFn = str => {

}


