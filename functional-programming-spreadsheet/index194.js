---
id: 5d792534857332d07ccba3ad
title: Step 27
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Set `infix` to `/([0-9.]+)([+-])([0-9.]+)/` in `applyFn`.
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
  const noHigh = highPrecedence(str);
}

/*
Set `infix` to `/([0-9.]+)([+-])([0-9.]+)/` in `applyFn`.
*/
