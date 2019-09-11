---
id: 5d79253410532e13d13fe574
title: Step 29
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Set `regex` to `/([a-z]*)(([0-9., ]*))(?!.*()/i` in `applyFn`.
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
  const infix = /([0-9.]+)([+-])([0-9.]+)/;
  const str2 = infixEval(noHigh, infix);
}

/*
Set `regex` to `/([a-z]*)\(([0-9., ]*)\)(?!.*\()/i` in `applyFn`.
*/
